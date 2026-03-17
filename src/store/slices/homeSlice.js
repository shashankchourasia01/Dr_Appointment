import { createSlice } from '@reduxjs/toolkit';
import { homeData } from '../../data/homeData';

const initialState = {
  data: homeData,
  loading: false,
  error: null
};

const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    // Future actions for dynamic data
    setHomeData: (state, action) => {
      state.data = action.payload;
    }
  }
});

export const { setHomeData } = homeSlice.actions;
export default homeSlice.reducer;