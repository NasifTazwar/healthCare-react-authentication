import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';


const Login = () => {
    const { signInUsingGoogle } = useAuth();
    return (
        <div>
            <div>
                <h2>Please Login</h2>
                <div className="row">
                <form className="col-lg-6 col-md-12 offset-lg-3">
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1"/>
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