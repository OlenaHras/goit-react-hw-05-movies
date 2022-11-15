import { useEffect, useState } from 'react';
import { useParams, Outlet, Link, useLocation } from 'react-router-dom';
import { getDetails } from 'Sourses/API';
import { DetailsWrapper, Main } from './MovieDetails.styled';
// import { Cast } from "../../pages/Cast";

export const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  // console.log(location.state);
  useEffect(() => {
    getDetails(movieId).then(result => {
      setMovie(result);
    });
  });

  return (
    <Main>
      {/* <button type="button">Go back</button> */}
      <Link to={location.state.from}>Go back</Link>
      {movie && (
        <div>
          <DetailsWrapper>
            <img
              src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
              alt={movie.original_title}
            />
            <div>
              <h1>{movie.original_title}</h1>
              <p>User Score: {movie.vote_average.toFixed(2)}</p>
              <h2>Overview </h2>
              <p>{movie.overview}</p>
              <h3>Genres</h3>
            </div>
          </DetailsWrapper>
          <h3>Additional information</h3>
          <ul>
            <li>
              <Link to="cast" state={{ from: location }}>
                Cast
              </Link>
            </li>
            <li>
              <Link to="reviews" state={{ from: location }}>
                Reviews{' '}
              </Link>
            </li>
          </ul>

          <Outlet />
        </div>
      )}
      {/* {movie &&
        movie.genres.map(genre => {
          return <p>{genre.name}</p>;
        })} */}
    </Main>
  );
};
