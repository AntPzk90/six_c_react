import axios from './axios';

export const fetchHotels = (url) =>
  axios.get(url).then((response) => {
    return response.data;
  });

export const fetchOffer = (url) =>
  axios.get(url).then((response) => {
    return response.data;
  });

export const loginUser = (url, data) =>
  axios
    .post(url, data)
    .then((response) => {
      return response.data;
    })
    .then((response) => {
      localStorage.setItem('user', JSON.stringify(response));
    });

export const checkLoginUser = (url) =>
  axios
    .get(url)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      if (err.response.status === 401) localStorage.removeItem('user');
      return err.response;
    });

export const fetchFavoritesHotels = (url) =>
  axios.get(url).then((response) => {
    return response.data;
  });

export const changeHotelFavoriteStatus = (url) =>
  axios.post(url).then((response) => {
    return response.data;
  });

export const postReview = (url, data) =>
  axios.post(url, data).then((response) => {
    return response.data;
  });

export const fetchReviews = (url) =>
  axios.get(url).then((response) => {
    return response.data;
  });
