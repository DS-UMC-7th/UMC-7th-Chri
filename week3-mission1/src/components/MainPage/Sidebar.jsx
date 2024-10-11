// src/components/Sidebar.jsx
import React from 'react';
import { FiSearch, FiFilm } from 'react-icons/fi';
import * as S from './SidebarStyle';

const Sidebar = () => (
  <S.SidebarContainer>
    <S.SidebarItem to="/search">
      <FiSearch /> 찾기
    </S.SidebarItem>
    <S.SidebarItem to="/category">
      <FiFilm /> 영화
    </S.SidebarItem>
  </S.SidebarContainer>
);

export default Sidebar;
