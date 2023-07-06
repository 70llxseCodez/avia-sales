import { createSlice } from '@reduxjs/toolkit';

const categorySlice = createSlice({
  name: '@@category',
  initialState: 'Самый дешевый',
  reducers: {
    setActive(_, action) {
      return action.payload;
    },
  },
});

export const { setActive } = categorySlice.actions;
export const categoryReducer = categorySlice.reducer;
