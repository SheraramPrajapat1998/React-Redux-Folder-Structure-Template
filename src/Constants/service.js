import axios from "axios";
import store from "../store";

const $http = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
  timeout: 30000,
  headers: {
    "Content-Type": "application/json",
  },
});

$http.interceptors.response.use(
  (config) => config,
  (error) => error
);

const handleApiError = () => {};

// adds authToken to every request
$http.interceptors.request.use(
  async (req) => {
    if (req?.headers) {
      const getState = await store?.getState();
      if (getState) {
        const authToken = store.getState()?.Auth?.authToken;
        if (authToken && authToken.length > 0) {
          $http.defaults.headers.common.Authorization = `Bearer ${authToken}`;
        }
      }
    }
    return req;
  },
  (err) => {
    return err;
  }
);

const setAuthorizationToken = (token) => {
  if (token) {
    $http.defaults.headers.common.Authorization = `Bearer ${token}`;
  }
};

let status_code = {
  success: 200,
  successAction: 201,
  notFound: 204,
  badRequest: 400,
  Unauthorized: 401,
  invalid: 400,
  timeout: 408,
  userDelete: 410,
  serverError: 500,
};

const postApiCall = (endPoint, params, successCallback, errorCallback) => {
  $http
    .post(endPoint, JSON.stringify(params))
    .then((response) => {
      if (response && response?.status === 200) {
        successCallback(response?.data);
      } else {
        successCallback(response?.response?.data);
      }
    })
    .catch((error) => {
      errorCallback && errorCallback(error?.response);
    });
};

const postUploadApiCall = (
  endPoint,
  params,
  successCallback,
  errorCallback
) => {
  $http
    .post(endPoint, params, {
      headers: {
        "content-type": "multipart/form-data",
      },
    })
    .then((response) => {
      if (response && response?.status === 200) {
        successCallback(response?.data);
      } else {
        successCallback(response?.response?.data);
      }
    })
    .catch((error) => {
      errorCallback && errorCallback(error?.response);
    });
};

const putApiCall = (endPoint, params, successCallback, errorCallback) => {
  $http
    .put(endPoint, params)
    .then((response) => {
      successCallback(response);
    })
    .catch((error) => {
      errorCallback(error.response);
    });
};

const postUploadBooks = (endPoint, params, successCallback, errorCallback) => {
  $http
    .post(endPoint, JSON.stringify(params), {
      headers: {
        Type: "multipart/form-data",
      },
    })
    .then((response) => {
      if (response && response?.status === 200) {
        successCallback(response?.data);
      } else {
        successCallback(response?.response?.data);
      }
    })
    .catch((error) => {
      errorCallback && errorCallback(error?.response);
    });
};

const getApiCall = (endPoint, paramsData, successCallback, errorCallback) => {
  $http
    .get(endPoint + paramsData, {})
    .then((response) => {
      successCallback(response);
    })
    .catch((error) => {
      errorCallback(error.response);
    });
};

const patchApiCall = (endPoint, params, successCallback, errorCallback) => {
  $http
    .patch(endPoint, JSON.stringify(params))
    .then((response) => {
      successCallback(response);
    })
    .catch((error) => {
      errorCallback(error.response);
    });
};

const deleteApiCall = (
  endPoint,
  paramsData,
  successCallback,
  errorCallback
) => {
  $http
    .delete(endPoint + paramsData, {})
    .then((response) => {
      successCallback(response);
    })
    .catch((error) => {
      errorCallback(error.response);
    });
};

const services = {
  postApiCall,
  postUploadApiCall,
  getApiCall,
  patchApiCall,
  putApiCall,
  deleteApiCall,
  handleApiError,
  setAuthorizationToken,
  status_code,
  $http,
};

export default services;
