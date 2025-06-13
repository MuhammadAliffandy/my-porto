import { persistReducer } from "redux-persist";
import storage from "./storage";
import { combineReducers } from "@reduxjs/toolkit";
import projectReducer from "./slices/projectSlices";

const rootReducer = combineReducers({
  project: projectReducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
