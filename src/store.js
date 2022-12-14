import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import middleware from "./middleware";
import rootReducer from './Redux/reducer';

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, middleware);
export const persistor = persistStore(store);

export default store;
