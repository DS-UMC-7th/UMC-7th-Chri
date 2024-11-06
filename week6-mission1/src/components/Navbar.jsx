import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as N from './NavbarStyle';
import { axiosAuthInstance } from '../apis/axios-instance'; // axios 인스턴스를 임포트

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const checkLoginStatus = async () => {
    const accessToken = localStorage.getItem('accessToken');
    
    if (accessToken) {
      setIsLoggedIn(true);
      
      try {
        const response = await axiosAuthInstance.get('/user/me', {
          headers: {
            Authorization: `Bearer ${accessToken}`, // Authorization 헤더에 accessToken 추가
          },
        });
        const userEmail = response.data.email;
        // 이메일에서 '@' 앞부분을 가져와 username 설정
        const username = userEmail.split('@')[0];
        setUsername(username);
      } catch (error) {
        console.error('유저 정보 가져오기 실패:', error.response?.data || error.message);
        setIsLoggedIn(false);  // 유저 정보 가져오기 실패 시 로그아웃 처리
        setUsername('');
      }
    } else {
      setIsLoggedIn(false);
      setUsername('');
    }
  };

  useEffect(() => {
    checkLoginStatus();

    const handleStorageChange = () => {
      console.log('Storage event detected.');
      checkLoginStatus();
    };

    window.addEventListener('storage', handleStorageChange);
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []); // 의존성 배열에 빈 배열을 넣어 처음 렌더링 시에만 실행되도록 함.

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('userEmail');
    setIsLoggedIn(false);
    setUsername('');
    navigate('/');
  };

  return (
    <N.NavbarContainer>
      <N.Logo to="/">YONGCHA</N.Logo>
      <div>
        {isLoggedIn ? (
          <>
            <span>{username}님 반갑습니다!</span>
            <N.LoginButton onClick={handleLogout}>로그아웃</N.LoginButton>
          </>
        ) : (
          <>
            <N.LoginButton to="/login">로그인</N.LoginButton>
            <N.SignupButton to="/signup">회원가입</N.SignupButton>
          </>
        )}
      </div>
    </N.NavbarContainer>
  );
};

export default Navbar;
