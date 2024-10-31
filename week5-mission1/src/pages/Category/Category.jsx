import React, { useEffect, useState } from 'react';
import * as C from './CategoryStyle';

const images = [
  { src: './src/assets/img1.jpg', label: '현재 상영중인', path: '/movies/now-playing' },
  { src: './src/assets/img2.jpg', label: '인기있는', path: '/movies/popular' },
  { src: './src/assets/img3.jpg', label: '높은 평가를 받은', path: '/movies/top-rated' },
  { src: './src/assets/img4.jpg', label: '개봉 예정중인', path: '/movies/up-coming' },
];

function Category() {
  return (
    <C.CategoryContainer>
      <C.CategoryTitle>카테고리</C.CategoryTitle>
      <C.ImageGrid>
        {images.map((image, index) => (
          <C.ImageCard key={index} data-label={image.label} to={image.path}>
            <img src={image.src} alt={image.label} />
          </C.ImageCard>
        ))}
      </C.ImageGrid>
    </C.CategoryContainer>
  );
}

export default Category;
