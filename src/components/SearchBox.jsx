import { useState } from 'react';

export const SearchBox = ({ onSubmit }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const handleInputChange = e => {
    setSearchQuery(e.currentTarget.value.toLowerCase());
  };
  const handleSubmit = e => {
    e.preventDefault();
    // console.log(e);
    onSubmit(searchQuery);
    // e.target.reset();
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movie"
        onChange={handleInputChange}
      />
      <button type="submit">
        <span>Search</span>
      </button>
    </form>
  );
};
