import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as N from './NavbarStyle';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const checkLoginStatus = () => {
    const accessToken = localStorage.getItem('accessToken');
    const userEmail = localStorage.getItem('userEmail');
    console.log("Checking login status:", { accessToken, userEmail });

    if (accessToken && userEmail) {
      setIsLoggedIn(true);
      setUsername(userEmail.split('@')[0]);
    } else {
      setIsLoggedIn(false);
      setUsername('');
    }
  };

  useEffect(() => {
    checkLoginStatus();

    const handleStorageChange = () => {
      console.log("Storage event detected.");
      checkLoginStatus();
    };

    window.addEventListener('storage', handleStorageChange);
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

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
