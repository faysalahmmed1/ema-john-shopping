import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo.svg';
import './Header.css';
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Header = () => {

    const [user] = useAuthState(auth);
    const [signOut, loading, error] = useSignOut(auth);
    if (error) {
        return (
            <div>
                <p>Error: {error.message}</p>
            </div>
        );
    }
    if (loading) {
        return <p>Loading...</p>;
    }
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/about">About</Link>
                {user ?
                    <button onClick={()=>signOut()} className='signOut-butten'>Sign Out</button>
                    :
                    <Link to='/login'>login</Link>}
            </div>
        </nav>
    );
};

export default Header;