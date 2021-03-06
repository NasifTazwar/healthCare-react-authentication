import React, { useState } from 'react';
import { Link,useLocation,useHistory } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';
import { getAuth, createUserWithEmailAndPassword, } from "firebase/auth";
import initializeAuthentication from '../../Firebase/firebase.init';
import { FcGoogle } from 'react-icons/fc';

initializeAuthentication();

const Register = () => {
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');
    // const [user , setUser] = useState('');
    const { signInUsingGoogle } = useAuth();
    const auth = getAuth();

    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || '/';

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
        .then(result=>{
            // setUser(result.user);
            history.push(redirect_url);
        })
        
        
    }
    return (
        <div>
            <div className="container my-4">
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
                    
                    <button className="btn btn-outline-dark" type="submit">Register</button> 
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
                    <button onClick={signInUsingGoogle} className="btn btn-outline-dark mb-5"><p className="fs-1 text"><FcGoogle></FcGoogle></p></button>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Register;