import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // useNavigate 가져오기
import axios from 'axios';
import * as M from './MovieCategoryStyle'; // 스타일 컴포넌트 경로

const MovieList = ({ apiUrl }) => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // useNavigate 훅 사용

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(apiUrl);
        setMovies(response.data.results);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchMovies();
  }, [apiUrl]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  const handleMovieClick = (movieId) => {
    navigate(`/movies/${movieId}`); // 클릭 시 해당 영화의 상세 페이지로 이동
  };

  return (
    <M.MovieContainer>
      <M.MovieList>
        {movies.map(movie => (
          <M.MovieCard key={movie.id} onClick={() => handleMovieClick(movie.id)}>
            <M.MovieImage src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            <M.MovieInfo>
              <h3>{movie.title}</h3>
              <p>{movie.release_date}</p>
            </M.MovieInfo>
          </M.MovieCard>
        ))}
      </M.MovieList>
    </M.MovieContainer>
  );
};

export default MovieList;
