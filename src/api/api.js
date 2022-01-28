import axios from "axios";

const api = axios.create({
  baseURL: `https://7.react.pages.academy/six-cities`,
  timeout: 1000 * 5,
  withCredentials: true,
});

// const onSuccess = (response) => response;
// const onFail = (err) => {
//   if (err.response.status === 403) {
//     console.log(`Обработал ошибку 403`);
//     return { data: null };
//   }
//   return err;
// };

// api.interceptors.response.use(onSuccess, onFail);

export const onGetRequest = () => {
  return api
    .get(`/hotels`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err.response.data.error);
    });
};

// const onPostRequest = () => {
//   return api
//     .post(`/login`, {
//       email: `test@test.com`,
//       password: 1234,
//     })
//     .then((res) => {
//       console.log(res.data);
//     })
//     .catch((err) => {
//       console.log(err.response.data.error);
//     });
// };

// const onLogoutRequest = () => {
//   return api
//     .get(`/logout`)
//     .then((res) => {
//       console.log(res);
//     })
//     .catch((err) => {
//       console.log(err.response.data.error);
//     });
// };
