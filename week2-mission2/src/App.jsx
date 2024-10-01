import './App.css';
import { MOVIES } from './mocks/movies';

function App() {
  return (
    <div className="movies-list">
      {MOVIES.results.map(movie => (
        <div key={movie.id} className="movie-card">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} // w500 크기의 포스터 사용
            alt={movie.title}
          />
        </div>
      ))}
    </div>
  );
}

export default App;
