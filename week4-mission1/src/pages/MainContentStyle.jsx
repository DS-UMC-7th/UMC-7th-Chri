import styled from 'styled-components';

export const ContentArea = styled.div`
  flex: 1;
  padding: 20px;
  background-color: black;
`;

export const MoviesList = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  gap: 10px;
`;

export const MovieCard = styled.div`
  position: relative;
  overflow: hidden;

  img {
    width: 100%;
    height: auto;
    border-radius: 5px;
    transition: filter 0.3s ease;
  }

  &:hover img {
    filter: brightness(70%);
  }
`;