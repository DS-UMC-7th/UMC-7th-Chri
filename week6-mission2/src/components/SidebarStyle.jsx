import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SidebarContainer = styled.aside`
  background-color: #333;
  color: white;
  padding: 25px;
  height: 100%;
`;

export const SidebarItem = styled(Link)`
  display: flex;
  align-items: center;
  font-size: 1.8rem;
  margin-bottom: 30px;
  margin-left: 10px;
  background-color: #333;
  color: white;
  font-weight: 700;
  text-decoration: none;

  svg {
    margin-right: 15px;
    font-size: 1.5rem;
    stroke-width: 2.5px;
  }

  &:hover {
    color: #ff0080;
  }
`;
