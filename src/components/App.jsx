import { Routes, Route } from 'react-router-dom';
import Home from 'pages/Home';
import Movies from 'pages/Movies';
import NotFound from 'pages/NotFound';
import { Link, Container, Header } from './App.styled';

export const App = () => {
  return (
    <Container>
      <Header>
        <Link to="/" end>
          <b>Home</b>
        </Link>
        <Link to="/movies">
          <b>Movies</b>
        </Link>
      </Header>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/movies" element={<Movies />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Container>
  );
};
