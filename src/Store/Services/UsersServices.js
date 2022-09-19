import API from "./APIs";

export const FetchUsers = (page) => {
  return API.get(`/users?sortBy=id&order=desc`)
    .then((res) => {
      return res.data.users;
    })
    .catch((err) => {
      return Promise.reject(err);
    });
};

export const DeleteUserService = (id) => {
  return API.delete(`/users/${id}/`).catch((err) => {
    return Promise.reject(err);
  });
};

export const EditUserService = (details) => {
  return API.get(`/users/${details.id}/`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return Promise.reject(err);
    });
};

export const SaveUpdatesService = (details) => {
  return API.put(`/users/${details.id}/`, details)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return Promise.reject(err);
    });
};