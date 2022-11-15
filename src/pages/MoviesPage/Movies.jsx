import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchMovie } from 'Sourses/API';
import { SearchBox } from '../../components/SearchBox';
import { MoviesList } from '../../components/MoviesList/MoviesList';

const Movies = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams('');
  const queryParams = searchParams.get('query') ?? '';

  // const handleInputChange = e => {
  //   const queryValue = e.currentTarget.value;
  //   // console.log(queryValue);
  //   setSearchParams(
  //     queryValue !== '' ? { query: queryValue.toLowerCase() } : {}
  //   );
  //   // setQuery(queryValue);
  // };

  const handleSubmit = query => {
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
    setQuery(query);
  };
  useEffect(() => {
    if (queryParams) {
      searchMovie(queryParams).then(results => setMovies(results));
    }
  });
  // if (queryParams) {
  // searchMovie(queryParams).then(results => setMovies(results));
  // }
  return (
    <>
      {/* <form onSubmit={handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          value={queryParams}
          placeholder="Search movie"
          onChange={handleInputChange}
        />
        <button type="submit">
          <span>Search</span>
        </button>
      </form> */}
      <SearchBox onSubmit={handleSubmit} />
      <MoviesList list={movies} />
    </>
  );
};

export default Movies;
