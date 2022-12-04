import { createSlice } from "@reduxjs/toolkit";
import artistDetailsArray from "../data/artistDetails.json";

const artistSlice = createSlice({
  name: "details",
  initialState: artistDetailsArray,
});

export default artistSlice.reducer;
