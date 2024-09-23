import { createSlice } from "@reduxjs/toolkit";

const itemSlice = createSlice({
  name: "items",
  initialState: [],
  reducers: {
    addItems: (state, { payload }) => payload,
  },
});
export const { addItems } = itemSlice.actions;
export const selectItems = (state) => state?.items;
export default itemSlice?.reducer;