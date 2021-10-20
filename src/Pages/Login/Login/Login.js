import React, { useState } from 'react';
import { Link,useLocation,useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { FcGoogle } from 'react-icons/fc';


const Login = () => {
    // const auth = getAuth();
    const { signInUsingGoogle,handleLogin,setIsLoading } = useAuth();

    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || '/';

    const handleGoogleLogin = () =>{
        signInUsingGoogle()
        .then(result=>{
            // setUser(result.user);
            history.push(redirect_url);
        })
        .finally(()=> setIsLoading(false));
    }

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
        handleLogin(email,password)
        .then(result=>{
            // setUser(result.user);
            history.push(redirect_url);
        })
        .finally(()=> setIsLoading(false));
    }
    
    return (
        <div>
            <div className="container my-4">
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
                    
                    <button className="btn btn-outline-dark" type="submit">Login</button> 
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
                    <button onClick={handleGoogleLogin} className="btn btn-outline-dark mb-5"><p className="fs-1 text"><FcGoogle></FcGoogle></p></button>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Login;