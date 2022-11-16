import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { searchMovie } from 'Sourses/API';
import { SearchBox } from '../../components/SearchBox/SearchBox';
import { MoviesList } from '../../components/MoviesList/MoviesList';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams('');
  const queryParams = searchParams.get('query') ?? '';

  const handleSubmit = query => {
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
  };
  useEffect(() => {
    if (queryParams) {
      searchMovie(queryParams).then(results => {
        if (!results.length) {
          toast.error(
            'Sorry, there are no movies matching your search query. Please try again.'
          );
          return;
        }
        setMovies(results);
      });
    }
  }, [queryParams]);

  return (
    <>
      <SearchBox onSubmit={handleSubmit} />
      <MoviesList list={movies} />
      <ToastContainer autoClose={2000} position="top-center" />
    </>
  );
};

export default Movies;
Movies.propTypes = {
  query: PropTypes.string,
};
