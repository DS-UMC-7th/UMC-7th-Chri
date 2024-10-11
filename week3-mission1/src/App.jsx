// src/App.jsx
import React from 'react';
import styled from 'styled-components';
import Navbar from './components/MainPage/Navbar';
import Sidebar from './components/MainPage/Sidebar';
import MainContent from './components/MainPage/MainContent';

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const MainContentArea = styled.div`
  display: flex;
  flex: 1;
`;

function App() {
  return (
    <LayoutContainer>
      <Navbar />
      <MainContentArea>
        <Sidebar />
        <MainContent />
      </MainContentArea>
    </LayoutContainer>
  );
}

export default App;
