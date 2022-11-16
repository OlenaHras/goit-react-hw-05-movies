import { useEffect, useState } from 'react';
import { getPopularMovie } from 'Sourses/API';
import { MoviesList } from '../../components/MoviesList/MoviesList';
import { Wrapper } from './HomePage.staled';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getPopularMovie().then(results => setMovies(results));
  }, []);

  return (
    <Wrapper>
      <h1>Trending today</h1>
      <MoviesList list={movies} />
    </Wrapper>
  );
};

export default Home;
