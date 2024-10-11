import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CategoryContainer = styled.div`
  padding: 20px;
`;

export const CategoryTitle = styled.h2`
  color: white;
  margin-bottom: 20px;
`;

export const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 4개의 이미지를 가로로 배열 */
  gap: 20px;
`;

export const ImageCard = styled(Link)`
  position: relative;
  overflow: hidden;
  text-decoration: none;

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 5px;
    transition: filter 0.3s ease;
  }

  &:hover img {
    filter: brightness(70%);
  }

  &:after {
    content: attr(data-label);
    position: absolute;
    bottom: 10px;
    left: 10px;
    color: white;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 5px;
    border-radius: 5px;
  }
`;
