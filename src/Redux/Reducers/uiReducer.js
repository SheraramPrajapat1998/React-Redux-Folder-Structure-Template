import { SnakbarReducerModal } from "../../Modals";
import UITYPES from "../Types/uiTypes";

export const initialUIState = new SnakbarReducerModal();

const uiReducer = (state = initialUIState, action) => {
  switch (action.type) {
    case UITYPES.SNACKBAR_SUCCESS:
      return {
        ...state,
        ...initialUIState,
        successSnackbarOpen: true,
        message: action.payload,
      };
    case UITYPES.SNACKBAR_ERROR:
      return {
        ...state,
        ...initialUIState,
        errorSnackbarOpen: true,
        message: action.payload,
      };
    case UITYPES.SNACKBAR_INFO:
      return {
        ...state,
        ...initialUIState,
        infoSnackbarOpen: true,
        message: action.payload,
      };
    case UITYPES.SNACKBAR_WARNING:
      return {
        ...state,
        ...initialUIState,
        warningSnackbarOpen: true,
        message: action.payload,
      };

    case UITYPES.SNACKBAR_CLEAR:
      return {
        ...state,
        ...initialUIState,
      };
    default:
      return state;
  }
};

export default uiReducer;
