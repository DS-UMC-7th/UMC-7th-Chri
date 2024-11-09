import styled from 'styled-components';

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column; /* 세로로 정렬 */
  justify-content: center; /* 수직 중앙 정렬 */
  align-items: center; /* 수평 중앙 정렬 */
  width: 100%;
  height: 70vh;
`;

export const StyledHeading = styled.h1`
  color: white;
  font-size: 3rem;
  padding: 20px;
  font-weight: bold;
`;

export const StyledInputContainer = styled.div`
  display: flex;
  flex-direction: column; 
  width: 320px;
  gap: 5px;
`;

export const StyledInput = styled.input`
  padding: 14px 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%; /* 부모 컨테이너의 폭에 맞춤 */
`;

export const ErrorMessage = styled.p`
  color: red;
  margin-bottom: 10px;
  font-size: 12px;
  height: 10px; 
  opacity: ${props => (props.show ? 1 : 0)}; 
  transition: opacity 0.3s; 
`;

export const StyledButton = styled.button`
  width: 340px;
  padding: 10px;
  margin-top: 10px;
  border: none; 
  border-radius: 5px;
  background-color: ${props => (props.disabled ? 'gray' : '#ff69b4')};
  color: white;
  font-size: 1.2rem;
  cursor: pointer; 
  transition: background-color 0.3s; 
`;
