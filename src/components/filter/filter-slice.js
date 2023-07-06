import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  all: true,
  filterNames: {
    'Без пересадок': true,
    '1 пересадка': true,
    '2 пересадки': true,
    '3 пересадки': true,
  },
};

const filterSlice = createSlice({
  name: '@@filter',
  initialState,
  reducers: {
    setAll(state) {
      state.all = !state.all;
      Object.keys(state.filterNames).forEach((item) => {
        state.filterNames[item] = state.all;
      });
    },
    checkItem(state, action) {
      state.filterNames[action.payload] = !state.filterNames[action.payload];

      const checkAll = Object.values(state.filterNames).filter((item) => item === true).length === 4;
      if (checkAll) {
        state.all = true;
      } else {
        state.all = false;
      }
    },
  },
});

export const { setAll, checkItem } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
