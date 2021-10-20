import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
    return (
        <div className="container-fluid details-fluid">
        <div className="container details py-4">
                    <div className="py-4">
                        <form className="form-l" action="">
                            <h3 className="contact-title">Contact Us</h3>
                            <div className="info">
                                <p>Name: 
                                    <input type="text" name="name" placeholder="Enter Your Name" id=""/>
                                </p>
                                    
                                <p>Email:
                                    <input type="email" name="email" placeholder="Enter Email" id=""/>
                                </p>
                                
                                <button className="btn btn-danger">Contact Us</button>
                            </div>
                        </form>
                    </div>

                    <div>
                        <img className="img-fluid" src="https://seeklogo.com/images/C/call-us-contact-us-logo-3CF21DD769-seeklogo.com.png" alt="" />
                    </div>
                </div>
                </div>
    );
};

export default ContactUs;