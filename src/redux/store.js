import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./reducers/rootReducers";

export const store = configureStore({
  reducer: rootReducer,
});

if (process.env.NODE_ENV === "development" && module.hot) {
  module.hot.accept("./reducers/rootReducers", () => {
    const newRootReducer = require("./reducers/rootReducers").default;
    store.replaceReducer(newRootReducer);
  });
}

export default store;
