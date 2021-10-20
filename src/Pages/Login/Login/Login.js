import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


const Login = () => {
    const auth = getAuth();
    const { signInUsingGoogle,handleLogin } = useAuth();
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');

    const handleEmail = e =>{
        setEmail(e.target.value);
    }

    const handlePassword = e =>{
        setPassword(e.target.value);
    }

    // handleLogin(email,password);
    const handleLoginClick=(e)=>{
        e.preventDefault();
        handleLogin(email,password);
    }
    
    return (
        <div>
            <div>
                <h2>Please Login</h2>
                <div className="row container-fluid">
                <form onSubmit={handleLoginClick} className="col-lg-6 col-md-12 offset-lg-3">
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input onBlur={handleEmail} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input onBlur={handlePassword} type="password" className="form-control" id="exampleInputPassword1"/>
                    </div>
                    
                    <input type="submit" value="Submit"/>
                    <hr />
                </form>
                <br />
                <br />
                <p>Click <Link to="/register"> Here</Link> To Register</p>
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

export default Login;