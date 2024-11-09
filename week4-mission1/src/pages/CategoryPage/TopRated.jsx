import MovieList from './MovieList'; // 새로 만든 MovieList 컴포넌트 경로

const TopRated = () => {
  return (
    <MovieList 
      apiUrl={`https://api.themoviedb.org/3/movie/top_rated?api_key=6c60e7f9faa167c5a152da49115e39ee&language=ko-KR`} 
      title="Top Rated Movies" 
    />
  );
};

export default TopRated;
