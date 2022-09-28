import { configureStore } from '@reduxjs/toolkit';
import companiesSlice from './companiesSlice/reducer';
import employeesSlice from './employeesSlice/reducer';

const store = configureStore(
  {
    reducer: {
      companiesSlice,
      employeesSlice,
    },
  },
);

export default store;