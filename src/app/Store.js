import { configureStore } from '@reduxjs/toolkit'
import  userDetail  from '../features/UserdetailSlice'

export const store = configureStore({
  reducer: {
    app: userDetail
  },
})