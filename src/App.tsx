import { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbars/Navbar';
import PokemonList from './pages/PokemonList';
import './App.css'
import Pokemon from './pages/Pokemon';
import Login from './pages/Login';
import { useSelector } from 'react-redux';
import { selectPokemonsStatus } from './features/PokemonSlice';
import { posibleStatus } from './app/posibleStatus';
import { getAllPokemons } from './actions/pokemon/getAllPokemons';
import { useAppDispatch } from './app/store';

const user = "";

function App() {

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (status === posibleStatus.IDLE) {
        for (let i = 1; i <= 50; i++) {
            dispatch(getAllPokemons(i))
        }
    }

}, [dispatch])

const status = useSelector(selectPokemonsStatus());

  return (
    <BrowserRouter>
      
      <Navbar />

      <Routes>
        <Route path="/" element={<PokemonList />} />
        <Route path="/login" element={<Login />} />
        <Route path="/pokelist" element={<PokemonList />} />
        <Route path="/pokemon" element={<Pokemon />} />
      </Routes>
      
    </BrowserRouter>
  )
}

export default App
