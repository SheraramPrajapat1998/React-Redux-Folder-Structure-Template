import { AuthReducerModal } from "../Modals";
import * as Actions from "../Types/authTypes";

const initialAuthState = new AuthReducerModal();

const AuthReducer = (state = initialAuthState, action) => {
  switch (action.type) {
    case Actions.SET:
      return { ...state, ...action.payload };
    case Actions.LOADER:
      return { ...state, settingLoader: action.payload };
    default:
      return state;
  }
};

export default AuthReducer;
