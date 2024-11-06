import styled from 'styled-components';

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  gap: 10px;
  margin-bottom: 15px; /* 각 Input 사이에 여백 추가 */
`;

export const StyledInput = styled.input`
  padding: 14px 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
`;

export const ErrorMessage = styled.p`
  color: red;
  font-size: 12px;
  height: 10px;
  visibility: ${({ $show }) => ($show ? 'visible' : 'hidden')};
  opacity: ${({ $show }) => ($show ? 1 : 0)};
  transition: opacity 0.3s ease-in-out;
`;


export const StyledButton = styled.button`
  width: 340px;
  padding: 10px;
  margin-top: 10px;
  border: none;
  border-radius: 5px;
  background-color: ${({ $disabled }) => ($disabled ? 'gray' : '#ff69b4')};
  font-size: 1.2rem;
  cursor: pointer;
  transition: background-color 0.3s;
`;
