import { getCredits } from 'Sourses/API';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import defaultImage from '../../Images/default_image.png';
import { CastList, Image, DefaultImg } from './Cast.styled';

export const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getCredits(movieId).then(result => setCast(result.cast));
  }, [movieId]);
  console.log(cast);
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
