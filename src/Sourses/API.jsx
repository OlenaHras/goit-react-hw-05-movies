import axios from 'axios';

const API_KEY = '6c207361eb28322b166c08094eab48dc';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const END_POINTS = {
  trending: '/trending/movie/week',
  searchMovie: '/search/movie',
  details: '/movie/{movie_id}',
  credits: '/movie/{movie_id}/credits',
  reviews: '/movie/{movie_id}/reviews',
};

export const getPopularMovie = async () => {
  const response = await axios.get(`${END_POINTS.trending}?api_key=${API_KEY}`);
  return response.data.results;
};

export const searchMovie = async () => {
  const response = await axios.get(
    `${END_POINTS.searchMovie}?api_key=${API_KEY}`
  );
  return response.data.results;
};

export const getDetails = async () => {
  const response = await axios.get(`${END_POINTS.details}?api_key=${API_KEY}`);
  return response.data.results;
};

export const getCredits = async () => {
  const response = await axios.get(`${END_POINTS.credits}?api_key=${API_KEY}`);
  return response.data.results;
};

export const getReviews = async () => {
  const response = await axios.get(`${END_POINTS.reviews}?api_key=${API_KEY}`);
  return response.data.results;
};
