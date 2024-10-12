import * as N from './NavbarStyle';

const Navbar = () => (
  <N.NavbarContainer>
    <N.Logo to="/">YONGCHA</N.Logo>
    <div>
      <N.LoginButton to="/login">로그인</N.LoginButton>
      <N.SignupButton to="/signup">회원가입</N.SignupButton>
    </div>
  </N.NavbarContainer>
);

export default Navbar;
