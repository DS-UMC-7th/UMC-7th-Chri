// src/components/MainContent.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { MOVIES } from '../../mocks/movies';
import Login from '../LoginPage/Login';
import Signup from '../SignupPage/Signup';
import Search from '../SearchPage/Search';
import Category from '../CategoryPage/Category';
import NowPlaying from '../CategoryPage/NowPlaying';
import Popular from '../CategoryPage/Popular';
import TopRated from '../CategoryPage/TopRated';
import Upcoming from '../CategoryPage/Upcoming';
import * as M from './MainContentStyle';

const MainContent = () => (
  <M.ContentArea>
    <Routes>
      <Route path="/" element={
        <M.MoviesList>
          {MOVIES.results.map(movie => (
            <M.MovieCard key={movie.id}>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
            </M.MovieCard>
          ))}
        </M.MoviesList>
      } />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/search" element={<Search />} />
      <Route path="/category/*" element={<Category />} />
      <Route path="/movies/now-playing" element={<NowPlaying />} />
      <Route path="/movies/popular" element={<Popular />} />
      <Route path="/movies/top-rated" element={<TopRated />} />
      <Route path="/movies/up-coming" element={<Upcoming />} />
    </Routes>
  </M.ContentArea>
);

export default MainContent;
