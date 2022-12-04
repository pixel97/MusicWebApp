import { createSlice } from "@reduxjs/toolkit";
import artistReviewsArray from "../data/artistReviews.json";

const artistReviewSlice = createSlice({
  name: "review",
  initialState: artistReviewsArray,
});

export default artistReviewSlice.reducer;
