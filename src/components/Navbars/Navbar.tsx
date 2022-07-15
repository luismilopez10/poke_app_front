import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { logOutInReducer } from '../../app/loggedInSlice';
import { RootState } from '../../app/store';
import './Navbar.css'

const Navbar = () => {

    const { user } = useSelector((state: RootState) => state.logged);
    const dispatch = useDispatch();

    const logout = () => {
        dispatch(logOutInReducer());
    }

    {
        if (!user) {
            return (
                <header>
                    <nav className='nav nav__container'>

                        <img className="nav__logo" src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/1026px-Pok%C3%A9_Ball_icon.svg.png'></img>
                        <span className='navbar-brand'>Poke App</span>
                    </nav>
                </header>
            )
        }
    }
    return (
        <header>
            <nav className='nav nav__container'>

                <div>
                    <img className="nav__logo" src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/1026px-Pok%C3%A9_Ball_icon.svg.png'></img>
                    <span className='user__name'>{user}</span>
                </div>
                <span className='navbar-brand'>Poke App</span>

                <ul className='nav__list'>
                    <li className='nav-link'>
                        <Link to='/pokelist' className='nav__link'>Pokemon List</Link>
                    </li>
                    <li className='nav-link'>
                        <Link to='/login' className='nav__link' onClick={() => {logout()}}>Exit</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar