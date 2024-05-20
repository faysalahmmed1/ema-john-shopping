import React, { useState } from 'react';
import './SignUp.css'
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';


const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, SetPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const [
        createUserWithEmailAndPassword,
        user

    ] = useCreateUserWithEmailAndPassword(auth);

   


    const handleEmailblur = (event) => {
        setEmail(event.target.value);
    };
    const handlePassword = (event) => {
        SetPassword(event.target.value);
    };
    const handleConfirmPassword = (event) => {
        setConfirmPassword(event.target.value);

    };
    const handleCreateUsers = (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            setError("your confirm password don't Macth!!")
            return;
        }
        if (password.length < 5) {
            setError('your password minimam 6 laters!!')
            return
        }
        createUserWithEmailAndPassword(email, password);
    };

    if (user) {
        navigate('/');

    };
    return (
        <div className='logSigin-container'>
            <h1 className='signin'>Sign Up</h1>
            <div className='input-form'>
                <form onSubmit={handleCreateUsers}>
                    <div className="input-group">
                        <label className='label-email' htmlFor="email">Email</label>
                        <br />
                        <input onChange={handleEmailblur} type="email" name="email" placeholder='Enter  your Email' id="" required />
                    </div>

                    <div className="input">
                        <label className='label-password' htmlFor="password">Pasword</label>
                        <br />
                        <input onChange={handlePassword} type="password" name="password" placeholder='Enter your password' id="" required />
                    </div>

                    <div className="input">
                        <label className='label-password' htmlFor="password">Confrim-Pasword</label>
                        <br />
                        <input onChange={handleConfirmPassword} type="password" name="password" placeholder='Enter your
                        Confirm-password' id="" required />
                    </div>
                    <p style={{ color: 'red' }}>{error}</p>
                    <input className='sumit-btn' type="submit" value="Sign Up" />
                </form>
            </div>
            <div>
                <p className='create-new'>Already you have Account? <Link className='linkinsigin' to={'/login'}>Login</Link></p>
            </div>

        </div>
    );
};

export default SignUp;






