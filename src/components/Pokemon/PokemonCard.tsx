import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { RootState } from '../../app/store'
import { editPokemon, pokemonType } from '../../features/PokemonSlice'
import './PokemonCard.css'

const PokemonCard = (props: pokemonType) => {
  
  const {user} = useSelector((state:RootState) => state.logged);

  const dispatch = useDispatch();

  const editPokemonToShow = () => {
    dispatch(editPokemon({
      id: props.id,
      name: props.name,
      types: props.types,
      sprites: props.sprites,
      favorite: props.favorite
    }))
  }

  return (
    <div className='pokemon'>
      <input className='pokemon__favorite' type="checkbox" checked={props.favorite} />
      <Link to='/pokemon' className='pokemon__link' onClick={editPokemonToShow}>
        <img src={props.sprites.other.home.front_default} alt="" style={{width: "90px"}} />
        <h1 className='pokemon__title'>{props.name}</h1>
        {props.types.map(type => {
          return (
            <p className='pokemon__description'>{type.type.name}</p>
          )
        })}
      </Link>
    </div>
  )
}

export default PokemonCard