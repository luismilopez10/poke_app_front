import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getAllPokemons } from "../actions/pokemon/getAllPokemons";
import { RootState } from "../app/store";
import { posibleStatus } from "../app/posibleStatus";

type pokemonType = {
    id: number,
    name: string,
    types: [{
        type: {
            name: string
        }
    }],
    sprites: {
        front_default: string,
        other: {
            home:{
                front_default: string
            }
        }
    },
    favorite: boolean,
}

interface initialStatePokemonType {
    pokemons: pokemonType[],
    pokemon: {
        id: number,
        name: string,
        types: [{
            type: {
                name: string
            }
        }],
        sprites: {
            front_default: string,
            other: {
                home:{
                    front_default: string
                }
            }
        },
        favorite: boolean,
    }
    status: posibleStatus,
    error: string | null
}

const initialState: initialStatePokemonType = {
    pokemons: [],
    pokemon: {
        id: 0,
        name: "",
        types: [{
            type: {
                name: ""
            }
        }],
        sprites: {
            front_default: ""
        },
        favorite: false,
    },
    status: posibleStatus.IDLE,
    error: null,
}

const pokemonSlice = createSlice({
    name: "pokemon",
    initialState,
    reducers: {
        editPokemon: (state: initialStatePokemonType, action: PayloadAction<pokemonType>) => {
            state.pokemon.id = action.payload.id;
            state.pokemon.name = action.payload.name;
            state.pokemon.types = action.payload.types;
            state.pokemon.sprites = action.payload.sprites;
            state.pokemon.favorite = action.payload.favorite;
        }
    },
    extraReducers: (builder) => {
        //GET
        builder.addCase(getAllPokemons.pending, (state, action) => {
            state.status = posibleStatus.PENDING
        })
        builder.addCase(getAllPokemons.fulfilled, (state, action) => {
            state.status = posibleStatus.COMPLETED
            state.pokemons.push(action.payload)
        })
        builder.addCase(getAllPokemons.rejected, (state, action) => {
            state.status = posibleStatus.FAILED
            state.error = "Something went wrong while fetching"
            state.pokemons
        })
    }
})


export type { pokemonType }
export type { initialStatePokemonType }
export default pokemonSlice.reducer

export const selectPokemonsState = () => (state: RootState) => state.pokemon.pokemons
export const selectPokemonsStatus = () => (state: RootState) => state.pokemon.status
export const selectPokemonsFetchError = () => (state: RootState) => state.pokemon.error
export const {editPokemon} = pokemonSlice.actions