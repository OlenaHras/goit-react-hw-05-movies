import { Routes, Route, Navigate } from 'react-router-dom';
import Home from 'pages/HomePage/Home';
import Movies from 'pages/MoviesPage/Movies';
import { Cast } from './Cast/Cast';
import { Reviews } from './Reviews/Reviews';
import NotFound from 'pages/NotFound';
// import { Layout } from './Layout';
import { NavItem, Container, Header } from './App.styled';
import { MovieDetails } from './MovieDetails/MovieDetails';

export const App = () => {
  return (
    <Container>
      <Header>
        <NavItem to="/" end>
          <b>Home</b>
        </NavItem>
        <NavItem to="/movies">
          <b>Movies</b>
        </NavItem>
      </Header>
      <Routes>
        {/* <Route path="/" element={<Layout />}></Route> */}
        <Route path="/" element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Container>
  );
};
