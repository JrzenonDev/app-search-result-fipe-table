import { createSlice } from "@reduxjs/toolkit";

const carSlice = createSlice({
  name: "car",
  initialState: {
    models: [],
  },
  reducers: {
    updateModels: (state, action) => {
      state.models = action.payload;
    },
  },
});

export const { updateModels } = carSlice.actions;

export default carSlice.reducer;
