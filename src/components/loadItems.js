import axios from "axios";
import { addItems } from "./ItemSlice";
import { useState } from "react";
// thunk action creator
export function loadItems() {
  // thunk action /function
  return async (dispatch, getState) => {
    const { data } = await axios.get("https://fakestoreapi.com/products")
  
    if (data?.data) dispatch(addItems(data?.data));
  };
}
