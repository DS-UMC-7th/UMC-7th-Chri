import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavbarContainer = styled.nav`
  height: 60px;
  background-color: #333;
  color: #ff0080;
  display: flex;
  align-items: center;
  padding: 10px 20px;
  font-size: 1.2rem;
  justify-content: space-between;
  line-height: 60px;
`;

export const Logo = styled(Link)`
  color: #ff0080;
  text-decoration: none;
  font-size: 1.5rem;
`;

export const Button = styled(Link)`
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  margin-left: 10px;
  text-decoration: none;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s ease;
  margin-right: 10px;

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;

export const LoginButton = styled(Button)`
  background-color: transparent;
  color: white;
`;

export const SignupButton = styled(Button)`
  background-color: #ff0080;
  color: white;

  &:hover {
    background-color: #e60073;
  }
`;
