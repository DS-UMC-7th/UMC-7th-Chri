import './App.css'

import {createBrowserRouter, RouterProvider} from "react-router-dom";

import MainPage from "./pages/MainContent.jsx";
import NotFound from "./pages/Movies/not-found.jsx";
import RootLayout from "./layout/root-layout.jsx";
import Login from "./pages/Login/Login.jsx"
import SearchPage from './pages/Search/SearchPage.jsx';
import Signup from "./pages/SignUp/Signup.jsx";
import Category from './pages/Category.jsx';
import NowPlaying from "./pages/CategoryPage/NowPlaying.jsx";
import Popular from "./pages/CategoryPage/Popular.jsx";
import TopRated from "./pages/CategoryPage/TopRated.jsx";
import UpComing from "./pages/CategoryPage/Upcoming.jsx";
import MovieDetail from './pages/Detail/MovieDetail.jsx';

const router = createBrowserRouter([
    {
        path: '/*',
        element: <RootLayout/>,
        errorElement: <NotFound/>,
        children: [
            {
                index: true,
                element: <MainPage/>
            },
            {
              path: 'login',
              element: <Login />
            },
            {
              path: 'signup',
              element: <Signup />
            },
            {
              path: 'search',
              element: <SearchPage />
            },
            {
              path: 'category',
              element: <Category />
            },
        ]
    },
    {
      path: '/movies',
      element: <RootLayout/>,
      errorElement: <NotFound/>,
      children: [
          
          {
            path: 'now-playing',
            element: <NowPlaying />
          },
          {
            path: 'popular',
            element: <Popular />
          },
          {
            path: 'top-rated',
            element: <TopRated />
          },
          {
            path: 'up-coming',
            element: <UpComing />
          },
          {
            path: ':movieId', 
            element:<MovieDetail />
          }
      ]
  },

])

function App() {
    return <RouterProvider router={router}/>
}

export default App
