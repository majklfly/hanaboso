import { createSlice } from "@reduxjs/toolkit";

let initialState = {};

const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    addTask(state, action) {
      const { id, data } = action.payload;
      state[id] = data;
    },
    removeTask(state, action) {
      const { id } = action.payload;
      delete state[id];
    },
  },
});

export const { addTask, removeTask } = globalSlice.actions;

export default globalSlice.reducer;
