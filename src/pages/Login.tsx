import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logInInReducer } from '../app/loggedInSlice';
import './Login.css'

const Login = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [name, setName] = useState("");

    const login = () => {
        if (name) {
            dispatch(logInInReducer(name));
            navigate('/pokelist');
        }
    }

    return (
        <div>
            <form style={{ margin: 'auto', width: '30%', marginTop: '100px' }} action="">
                <label htmlFor="login">Please enter your name to login</label>
                <input className='login__input' type="text" value={name} onChange={(e) => setName(e.target.value)} id='login' placeholder='Ex. Ash Ketchum' />
                <button className='enter__button' onClick={login}>Enter</button>
            </form>
        </div>
    )
}

export default Login