import { configureStore } from '@reduxjs/toolkit';

import { categoryReducer } from '../components/catergories/categories-slice';
import { airlineReducer } from '../components/airline/airline-slice';

import { filterReducer } from './../components/filter/filter-slice';

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    category: categoryReducer,
    airlines: airlineReducer,
  },
});
