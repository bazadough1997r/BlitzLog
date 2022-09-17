import API from "./APIs";

export const FetchUsers = () => {
  return API.get(`/users/`)
    .then((res) => {
      return res.data.users;
    })
    .catch((err) => {
      return Promise.reject(err);
    });
};
