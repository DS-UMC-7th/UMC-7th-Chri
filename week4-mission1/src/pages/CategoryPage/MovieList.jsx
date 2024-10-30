import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import * as M from './MovieCategoryStyle';

const MovieList = ({ apiUrl }) => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true); // Loading state 추가
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(apiUrl);
        setMovies(response.data.results);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false); // Loading 완료
      }
    };

    fetchMovies();
  }, [apiUrl]);

  if (loading) return <div>Loading movies...</div>; // Loading 상태 출력
  if (error) return <div>Error: {error}</div>;

  const handleMovieClick = (movieId) => {
    navigate(`/movies/${movieId}`);
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
