import { useState } from 'react';
import { SearchForm, Input, SearchFormButton } from './SearchBox.styled';

export const SearchBox = ({ onSubmit }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const handleInputChange = e => {
    setSearchQuery(e.currentTarget.value.toLowerCase());
  };
  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(searchQuery);
  };
  return (
    <SearchForm onSubmit={handleSubmit}>
      <Input
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movie"
        onChange={handleInputChange}
      />
      <SearchFormButton type="submit">
        <span>Search</span>
      </SearchFormButton>
    </SearchForm>
  );
};
