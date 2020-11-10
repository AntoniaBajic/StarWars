import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import Slice from './Slice/slice';

export const store = configureStore({
  reducer: Slice.reducer,
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
