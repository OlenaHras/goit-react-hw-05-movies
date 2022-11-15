import { Link, useLocation } from 'react-router-dom';
// import { useState } from 'react';

export const MoviesList = ({ list }) => {
  const location = useLocation();
  return (
    <ul>
      {list.map(({ id, original_title }) => {
        return (
          <li id={id} key={id}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
              {original_title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
