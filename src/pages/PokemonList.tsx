import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../app/store';
import PokemonCard from '../components/Pokemon/PokemonCard';
import { selectPokemonsState } from '../features/PokemonSlice';
import './PokemonList.css'

const PokemonList = () => {

    const { user } = useSelector((state: RootState) => state.logged);
    const navigate = useNavigate();

    const [searchPokemon, setSearchPokemon] = useState("");

    useEffect(() => {
        if (user === null) {
            navigate('/login');
        }
    }, [])

    const pokemons = [...new Set(useSelector(selectPokemonsState()))];
    

    return (
        <>
            <form style={{ margin: 'auto', width: '30%', marginTop: '100px' }} action="">
                <label htmlFor="search">Search your favorite pokemon by name</label>
                <input className='search__pokemon' type="text" id='search' value={searchPokemon} onChange={(e) => setSearchPokemon(e.target.value)} placeholder='Ex. pikachu' />
            </form>

            <div className='pokemon__cards'>

                {pokemons
                    .slice(50)
                    .sort((a, b) => a.id - b.id)
                    .filter((filteredPokemon) => {
                        if (searchPokemon === "") {
                            return filteredPokemon;
                        } else if (filteredPokemon.name.toLocaleLowerCase().includes(searchPokemon.toLocaleLowerCase())) {
                            return filteredPokemon;
                        }
                        return false;
                    })
                    .map(pokemon => {

                        return (
                            <div key={pokemon.id} className='pokemon__container'>
                                <PokemonCard 
                                    id={pokemon.id} 
                                    name={pokemon.name} 
                                    types={pokemon.types} 
                                    sprites={pokemon.sprites}
                                    favorite={pokemon.favorite} />
                            </div>
                        )
                    })}
            </div>
        </>
    )
}

export default PokemonList