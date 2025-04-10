// redux/Slice.js
import { createSlice } from '@reduxjs/toolkit';

const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    Theme: false, 
  },
  reducers: {
    toggleTheme: (state) => {
      state.Theme = !state.Theme;
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
