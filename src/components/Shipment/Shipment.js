import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';



const Shipment = () => {
    const [user] = useAuthState(auth);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');


    const handleName = (event) => {
        setName(event.target.value);

    };

    const handleEmail = (event) => {
        setEmail(event.target.value);
    };

    const handleAddress = (event) => {
        setAddress(event.target.value);
    };

    const handlePhone = (event) => {
        setPhone(event.target.value);
    };

    const handleSubmite = (event) => {
        event.preventDefault();
    };

    return (
        <div className='logSigin-container'>
            <div className='input-form'>
                <form onSubmit={handleSubmite}>

                    <div className="input-group">
                        <label className='label-text' htmlFor="name">Name</label>
                        <br />
                        <input onChange={handleName} type="text" name="name" placeholder='Enter  your Name' id="" required />
                    </div>

                    <div className="input-group">
                        <label className='label-email' htmlFor="email">Email</label>
                        <br />
                        <input style={{ color: 'red' }} value={user?.email} readOnly type="email" name="email" placeholder='Enter  your Email' id="" required />
                    </div>


                    <div className="input">
                        <label className='label-address' htmlFor="address">Address</label>
                        <br />
                        <input onChange={handleAddress} type="text" name="address" placeholder='Enter your Address' id="" required />
                    </div>

                    <div className="input">
                        <label className='label-phone' htmlFor="phone">Phone Number</label>
                        <br />
                        <input onChange={handlePhone} type="text" name="phone" placeholder='Enter your phone number' id="" required />
                    </div>


                    <input className='sumit-btn' type="submit" value="Sign Up" />
                </form>
            </div>


        </div>
    );
};

export default Shipment;