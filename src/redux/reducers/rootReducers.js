import { combineReducers } from "@reduxjs/toolkit";
import globalReducer from "../slices/globalSlice";

export const rootReducer = combineReducers({
  globalReducer: globalReducer,
});
