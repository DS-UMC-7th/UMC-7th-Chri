import React from 'react';
import * as S from './SearchStyle';

const Search = () => {
  return (
    <S.SearchContainer>
      <input placeholder='영화 제목을 입력해주세요...' />
      <button>검색</button>
    </S.SearchContainer>
  );
};

export default Search;
