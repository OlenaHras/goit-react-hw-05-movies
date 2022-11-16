import { Link, useLocation } from 'react-router-dom';
import { Item, Image, List } from './MovieList.styled';

export const MoviesList = ({ list }) => {
  const location = useLocation();

  return (
    <List>
      {list.map(({ id, original_title, poster_path }) => {
        return (
          <Item id={id} key={id}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
              <Image
                src={`https://image.tmdb.org/t/p/w200/${poster_path}`}
                alt={original_title}
              />
              {original_title}
            </Link>
          </Item>
        );
      })}
    </List>
  );
};
