import endpoints from "../../Constants/endpoint";
import services from "../../Constants/service";
import AUTH_TYPES from "../Types/authTypes";
import { showErrorSnackbar, showSuccessSnackbar } from "./snackbarAction";

export const updateAuthValue = (key, value) => (dispatch) => {
  dispatch({
    type: AUTH_TYPES.SET,
    payload: {
      [key]: value,
    },
  });
};

export const updateAuthValues = (values) => (dispatch) => {
  dispatch({
    type: AUTH_TYPES.SET,
    payload: values,
  });
};

export const postLogin =
  (data, callback, errorCallback) => async (dispatch, getState) => {
    services.postApiCall(
      endpoints.auth.login,
      data,
      (res) => {
        if (res.statusCode === services.status_code.success) {
          localStorage.setItem("user", JSON.stringify({ email: data?.email }));
          dispatch(showSuccessSnackbar(res.message));
          callback(res);
        } else if (res.statusCode !== services.status_code.success) {
          errorCallback(res);
          dispatch(showErrorSnackbar(res.message));
        }
      },
      (err) => {
        errorCallback(err);
      }
    );
  };

export const postVerifyOtp =
  (data, callback, errorCallback) => async (dispatch, getState) => {
    services.postApiCall(
      endpoints.auth.verifyOtp,
      data,
      (res) => {
        if (res.statusCode === services.status_code.success) {
          dispatch(showSuccessSnackbar(res.message));
          callback(res);
        } else if (res.statusCode !== services.status_code.success) {
          errorCallback(res);
          dispatch(showErrorSnackbar(res.message));
        }
      },
      (err) => {
        errorCallback(err);
      }
    );
  };
