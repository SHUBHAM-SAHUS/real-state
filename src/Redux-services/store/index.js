import { configureStore } from '@reduxjs/toolkit'
import authProvider from '../AuthSlice'

export const store = configureStore({
  reducer: {
    AuthReducer:authProvider,
  },
})
