import styled from '@emotion/styled';

export const SearchForm = styled.form`
  display: flex;
  justify-content: center;
  margin: 24px;
  gap: 16px;
`;

export const Input = styled.input`
  display: inline-block;
  width: 200px;
  font: inherit;
  font-size: 20px;
  border: 2px solid blue;
  border-radius: 10px;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;
  &::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;

export const SearchFormButton = styled.button`
  display: inline-block;
  width: 60px;
  height: 48px;
  border: 0;
  border-radius: 10px;
  background-size: 40%;
  background-color: blue;
  color: white;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  &:hover {
    opacity: 1;
  }
`;
