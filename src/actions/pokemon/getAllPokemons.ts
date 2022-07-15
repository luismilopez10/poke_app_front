import { createAsyncThunk } from "@reduxjs/toolkit";
import { pokemonType } from "../../features/PokemonSlice";

const getAllPokemonsUrl = 'https://pokeapi.co/api/v2/pokemon/';

export const getAllPokemons = createAsyncThunk('getAllPokemons', async (id: number) => {
    const response = await fetch(`${getAllPokemonsUrl}${id}/`);
    return (await response.json() as pokemonType[])
})