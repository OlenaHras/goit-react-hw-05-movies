import { useEffect, useState } from 'react';
import { getPopularMovie } from 'Sourses/API';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getPopularMovie().then(results => setMovies(results));
  }, []);
  console.log(movies);
  return (
    <div>
      <h1>Trending today</h1>
      <ul>
        {movies.map(movie => {
          return <li>{movie.original_title}</li>;
        })}
      </ul>
    </div>
  );
};

export default Home;
