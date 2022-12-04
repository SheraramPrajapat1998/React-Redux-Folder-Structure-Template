import UITYPES from "../Types/uiTypes";


export const showSuccessSnackbar = (message) => {
  return {
    type: UITYPES.SNACKBAR_SUCCESS,
    payload: message,
  };
};

export const showErrorSnackbar = (message) => {
  return {
    type: UITYPES.SNACKBAR_ERROR,
    payload: message,
  };
};

export const showWarningSnackbar = (message) => {
  return {
    type: UITYPES.SNACKBAR_WARNING,
    payload: message,
  };
};

export const showInfoSnackbar = (message) => {
  return {
    type: UITYPES.SNACKBAR_INFO,
    payload: message,
  };
};

export const clearSnackbar = () => {
  return {
    type: UITYPES.SNACKBAR_CLEAR,
  };
};

const UI_ACTIONS = {
    showSuccessSnackbar,
    showErrorSnackbar,
    showWarningSnackbar,
    showInfoSnackbar,
    clearSnackbar,
};

export default UI_ACTIONS;
