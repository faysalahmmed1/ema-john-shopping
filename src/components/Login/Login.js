import './Login.css';

import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'


    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    if (error) {
        return (
            <div>
                <p style={{ textAlign: 'center', color: 'red', fontSize: '20px' }}>Wrong password {error.message}</p>
            </div>
        );
    }
    if (loading) {
        return <p>Loading...</p>;
    }

    if (user) {
        navigate(from, { replace: true });

    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
    };
    const handlePassword = (e) => {
        setPassword(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(email, password);
    }



    return (
        <div className='login-container'>
            <h1 className='login'>Login</h1>
            <div className='input-from'>
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label className='label-email' htmlFor="email">Email</label>
                        <br />
                        <input onChange={handleEmail} type="email" name="email" placeholder='Enter  your Email' id="" required />
                    </div>

                    <div className="input-group">
                        <label className='label-password' htmlFor="password">Pasword</label>
                        <br />
                        <input onChange={handlePassword} type="password" name="password" placeholder='Enter your password' id="" required />
                    </div>

                    <input className='btn' type="submit" value="Login" />
                </form>
            </div>
            <div>
                <p className='create-new'>No Accounts ? <Link className='linkinsigin' to={'/signup'}>Create new Account</Link></p>
            </div>
            <div className='or'>
                <p >--------------</p>
                <p style={{ margin: '10px', marginTop: '15px' }}>or</p>
                <p >--------------</p>
            </div>
            <div>
                <button className='googleBtn'>Signin With Google</button>
            </div>
        </div>
    );
};

export default Login;

