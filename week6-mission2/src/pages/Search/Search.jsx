import React, { useState, useEffect, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import { debounce } from 'lodash';
import * as S from './SearchStyle';
import useCustomFetch from '../../hooks/useCustomFetch';
import MovieList from '../CategoryPage/MovieList';

const Search = () => {
  const [searchValue, setSearchValue] = useState('');
  const [searchParams, setSearchParams] = useSearchParams({ mq: '' });
  const mq = searchParams.get('mq');

  // 검색어 변경 시 처리
  const onChangeSearchValue = (event) => {
    setSearchValue(event.target.value);
    debouncedSearch(event.target.value);
  };

  // 디바운스 처리
  const debouncedSearch = useCallback(
    debounce((value) => {
      if (value) {
        setSearchParams({ mq: value });
      }
    }, 500),
    []
  );

  // 검색 결과를 가져올 URL 생성
  const url = mq
    ? `https://api.themoviedb.org/3/search/movie?query=${mq}&include_adult=false&language=ko-KR&page=1`
    : null;

  const { data: movies, isLoading, isError } = useCustomFetch(url);

  return (
    <>
      <S.SearchContainer>
        <input
          placeholder="영화 제목을 입력해 주세요."
          value={searchValue}
          onChange={onChangeSearchValue}
        />
        <button onClick={() => debouncedSearch(searchValue)}>검색</button>
      </S.SearchContainer>
      <S.MovieResults>
        {isLoading ? (
          <S.SkeletonWrapper>
            <S.Skeleton />
            <S.Skeleton />
            <S.Skeleton />
          </S.SkeletonWrapper>
        ) : isError ? (
          <S.Message>오류가 발생했습니다. 다시 시도해주세요.</S.Message>
        ) : movies && movies.results && movies.results.length > 0 ? (
          <MovieList
            apiUrl={url} // 검색된 URL을 그대로 전달
            title="Search Movies"
          />
        ) : (
          mq && <S.Message>검색어 {mq}에 해당하는 데이터가 없습니다.</S.Message>
        )}
      </S.MovieResults>
    </>
  );
};

export default Search;
