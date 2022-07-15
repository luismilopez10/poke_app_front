import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import pokemonReducer from "../features/PokemonSlice"
import loggedInReducer from '../app/loggedInSlice'

const store = configureStore({
    reducer: {
        pokemon: pokemonReducer,
        logged: loggedInReducer
    },
});

export default store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()