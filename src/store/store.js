// Importing the configureStore function from @reduxjs/toolkit to set up the Redux store
import { configureStore } from "@reduxjs/toolkit";
// Importing the reducer for movie data from the movieoSlice file
import moveioReducer from "./movieoSlice"
// Exporting the configured store with the reducer for movie data
export const store = configureStore({
  reducer: {
    moveioData :moveioReducer // Mapping the reducer to the state key 'moveioData'
  },
});
