import styled from 'styled-components';

export const MovieContainer = styled.div`
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  width: 100%;
  flex: 1;
  overflow: hidden;
`;

export const MovieList = styled.div`
  display: flex;
  flex-wrap: wrap; 
  justify-content: flex-start; 
  margin: 0 auto;
  padding: 20px; 
  gap: 30px;
`;

export const MovieCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 5px;
  width: 150px;
`;

export const MovieImage = styled.img`
  width: 100%;
  height: 225px;
  object-fit: cover;
  border-radius: 5px;
  
`;

export const MovieInfo = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 10px;
  
  h3 {
    margin: 5px 0;
  }

  p {
    margin-top: 0;
  }
`;