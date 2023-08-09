import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import usersReducer from '../users/userSlice';
import thunkMiddleware from 'redux-thunk';

export const store = configureStore({
  reducer: {
    user: usersReducer,
  },
  middleware: [thunkMiddleware, ...getDefaultMiddleware()],
});
