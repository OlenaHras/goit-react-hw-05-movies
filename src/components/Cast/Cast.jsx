import { getCredits } from 'Sourses/API';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import defaultImage from '../../Images/default_image.png';
import { CastList, Image, DefaultImg } from './Cast.styled';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getCredits(movieId).then(result => setCast(result.cast));
  }, [movieId]);
  return (
    <CastList>
      {cast &&
        cast.map(({ id, original_name, profile_path }) => {
          return (
            <li key={id}>
              {profile_path ? (
                <Image
                  src={`https://image.tmdb.org/t/p/w300${profile_path}`}
                  alt={original_name}
                />
              ) : (
                <DefaultImg src={defaultImage} alt={original_name} />
              )}

              <p>{original_name}</p>
            </li>
          );
        })}
    </CastList>
  );
};
export default Cast;
Cast.propTypes = {
  movieId: PropTypes.string,
};
