import { configureStore } from '@reduxjs/toolkit'
import usersReducer from './features/users/userSlice'
// import userSlice from './features/users/userSlice';

export const store = configureStore({
  reducer: {
    users: usersReducer
  },
})