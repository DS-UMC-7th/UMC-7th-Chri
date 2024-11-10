import styled, { keyframes } from 'styled-components';

export const SearchContainer = styled.div`
  display: flex;
  justify-content: center;

  input {
    flex: 1;
    padding: 15px;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;

    border: 1px solid rgb(220, 220, 220);
  }
  button {
    width: 80px;
    background-color: #ff0080;
    cursor: pointer;
    border: none;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;

  }
`;

export const MovieResults = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* 왼쪽 정렬 */
  margin-top: 20px;

`;

export const Message = styled.p`
  font-size: 1.2rem;
  color: gray;
  margin-top: 20px;
`;

const shimmer = keyframes`
  0% { background-position: -200px 0; }
  100% { background-position: 200px 0; }
`;

export const SkeletonWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

export const Skeleton = styled.div`
  width: 200px;
  height: 300px;
  background: #ddd;
  background-image: linear-gradient(
    to right,
    #ddd 0%,
    #eee 20%,
    #ddd 40%,
    #ddd 100%
  );
  background-repeat: no-repeat;
  background-size: 200% 100%;
  animation: ${shimmer} 1.5s infinite;
  border-radius: 8px;
`;