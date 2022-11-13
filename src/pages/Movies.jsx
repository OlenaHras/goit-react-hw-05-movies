import { useEffect, useState } from 'react';
import { searchMovie } from 'Sourses/API';

const Movies = () => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    if (!query) {
      return;
    }
    searchMovie().then(results => setQuery(results));
  }, [query]);

  return <input type="text" />;
};

export default Movies;
