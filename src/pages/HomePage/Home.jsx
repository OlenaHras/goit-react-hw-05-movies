import { useEffect, useState } from 'react';

import { getPopularMovie } from 'Sourses/API';
import { MoviesList } from '../../components/MoviesList/MoviesList';
// import{MovieDetails} from

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getPopularMovie().then(results => setMovies(results));
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      <MoviesList list={movies} />
    </div>
  );
};

export default Home;
