import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { RootState } from '../app/store'
import PokemonCard from '../components/Pokemon/PokemonCard'
import './Pokemon.css'

const Pokemon = () => {

    const {user} = useSelector((state:RootState) => state.logged);
    const getPokemonToShow = useSelector((state:RootState) => state.pokemon.pokemon);
    const navigate = useNavigate();

    useEffect(() => {
        if (user === null) {
            navigate('/login');
        }
    }, [])

    const goBack = () => {
        navigate('/pokelist');
    }

    return (
        <div className='pokemon__container'>
            <PokemonCard id={getPokemonToShow.id} name={getPokemonToShow.name} types={getPokemonToShow.types} sprites={getPokemonToShow.sprites} favorite={getPokemonToShow.favorite} />
            <button role="button" className='back__button' onClick={goBack}> Go back to Pokemon List </button>
        </div>
    )
}

export default Pokemon