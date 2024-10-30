// 실습에 사용
import styled from 'styled-components';

import Card from "../components/Card/card.jsx"
import useCustomFetch from '../hooks/useCustomFetch.jsx';

const CardList = styled.div`

`;

const HomePage = () => {
  const {data: movies, isLoading, isError}=useCustomFetch(`/movie/upcoming?language=ko-KRS&page=1`);

  if (isLoading){
    return <div>
      <h1 style={{color:'white'}}>로딩 중 입니다...</h1>
    </div>
  }

  if(isError){
    return <div>
      <h1 style={{color:'white'}}>에러 중 입니다...</h1>
    </div>
  }

  return (
    <CardList>
      {movies.data?.results.map((movie) => (
        <Card key={movie.id} movie={movie} />
      ))}
    </CardList>
  );
};

export default HomePage;
