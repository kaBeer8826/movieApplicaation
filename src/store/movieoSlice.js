import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  bannerData: [],
  imageUrl: "",
};

const movieoSlice = createSlice({
  name: "moveio",
  initialState,
  reducers: {
    setBannerData: (state, action) => {
      state.bannerData = action.payload;
    },
    setImageUrl: (state, action) => {
      state.imageUrl = action.payload;
    },
  },
});

export const { setBannerData, setImageUrl } = movieoSlice.actions;
export default movieoSlice.reducer;
