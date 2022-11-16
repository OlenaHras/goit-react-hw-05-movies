import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useParams, Outlet, Link, useLocation } from 'react-router-dom';
import { getDetails } from 'Sourses/API';
import { DetailsWrapper, Main, BackLink, Wrapper } from './MovieDetails.styled';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();

  const result = [];
  if (movie) {
    movie.genres.map(genre => result.push(genre.name));
  }

  useEffect(() => {
    getDetails(movieId).then(result => setMovie(result));
  }, [movieId]);

  const BackLinkHref = location.state?.from ?? '//movies';
  return (
    <Main>
      <BackLink to={BackLinkHref}>Go back</BackLink>
      {movie && (
        <div>
          <DetailsWrapper>
            <img
              src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
              alt={movie.original_title}
            />
            <Wrapper>
              <h1>{movie.original_title}</h1>
              <p>User Score: {movie.vote_average.toFixed(2)}</p>
              <h2>Overview </h2>
              <p>{movie.overview}</p>
              <h3>Genres</h3>
              <p>{result.join(', ')}</p>
            </Wrapper>
          </DetailsWrapper>
          <h3>Additional information</h3>
          <ul>
            <li>
              <Link
                to="cast"
                state={{ from: location.state?.from ?? '/movies' }}
              >
                Cast
              </Link>
            </li>
            <li>
              <Link
                to="reviews"
                state={{ from: location.state?.from ?? '/movies' }}
              >
                Reviews{' '}
              </Link>
            </li>
          </ul>

          <Outlet />
        </div>
      )}
    </Main>
  );
};
export default MovieDetails;

MovieDetails.propTypes = {
  movie: PropTypes.exact({
    poster_path: PropTypes.string,
    original_title: PropTypes.string.isRequired,
    vote_average: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
  }),
};
