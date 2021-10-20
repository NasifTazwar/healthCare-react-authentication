import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';
import { getAuth, createUserWithEmailAndPassword, } from "firebase/auth";
import initializeAuthentication from '../../Firebase/firebase.init';

initializeAuthentication();

const Register = () => {
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');
    // const [user , setUser] = useState('');
    const { signInUsingGoogle } = useAuth();
    const auth = getAuth();

    const handleEmailChange = e =>{
        setEmail(e.target.value);
    }

    const handlePasswordChange = e =>{
        setPassword(e.target.value);
    }

    const handleRegistration = e =>{
        e.preventDefault();
        if(password.length<6){
            return;
        }
        createUserWithEmailAndPassword(auth, email, password)
        .then(result =>{
            const user = result.user;
        })
        
        
    }
    return (
        <div>
            <div>
                <h2>Please Register</h2>
                <div className="row">
                <form onSubmit={handleRegistration} className="col-lg-6 col-md-12 offset-lg-3">
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input onBlur={handleEmailChange} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required/>
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input onBlur={handlePasswordChange} type="password" className="form-control" id="exampleInputPassword1" required/>
                    </div>
                    
                    
                    <input type="submit" value="Submit"/>
                    <hr />
                </form>
                <br />
                <br />
                <p>Click <Link to="/login"> Here</Link> To Sign-in</p>
                <hr className="col-lg-6 offset-lg-3 col-md-12"/>
                <div>
                    <br />
                    <h2>Or,</h2>
                    <br />
                    <h5>Sign-in using Google!</h5>
                    <br />
                    <button onClick={signInUsingGoogle} className="btn btn-warning mb-5">Google Sign-in</button>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Register;