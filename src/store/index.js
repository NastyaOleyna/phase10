import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../slices/userSlice"
import gameReducer from "../slices/gameSlice"

export const store = configureStore({ reducer: { 
    users: userReducer,
    game: gameReducer
 } });

 store.subscribe(() => {
    console.log(store.getState());
 })