// React-Redux Configuring Store ----------------------
import { configureStore } from '@reduxjs/toolkit'   //inport configurestore
import todoReducer from '../features/todo/todoSlice'    //import todoReducer

// create store -------------
export const store = configureStore({
  reducer: todoReducer,//todoReducer allready a object-----
})