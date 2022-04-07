import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../features/productsSlice'
import categoryReducer from '../features/categorySlice'

export const store = configureStore({
  reducer: {
    product: productReducer,
    category: categoryReducer
  },
});
