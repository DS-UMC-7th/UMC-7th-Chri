import useCustomFetch from '../hooks/useCustomFetch';
import * as M from './MainContentStyle';

const MainContent = () => {
  const { data: movies, isLoading, isError } = useCustomFetch(`/movie/upcoming?language=ko-KR`);

  if (isLoading) {
    return <h1>로딩 중 입니다...</h1>;
  }

  if (isError) {
    return <h1>에러가 발생했습니다...</h1>;
  }

  if (!movies || movies.results.length === 0) {
    return <h1>표시할 영화가 없습니다.</h1>; // 기본 메시지
  }

  return (
    <M.ContentArea>
      <M.MoviesList>
        {movies.results.map((movie) => (
          <M.MovieCard key={movie.id}>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
          </M.MovieCard>
        ))}
      </M.MoviesList>
    </M.ContentArea>
  );
};

export default MainContent;
