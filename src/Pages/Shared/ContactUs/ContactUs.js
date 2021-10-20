import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
    return (
        <div className="container-fluid details-fluid">
        <div class="container details py-4">
                    <div className="py-4">
                        <form class="form-l" action="">
                            <h3 class="contact-title">Contact Us</h3>
                            <div class="info">
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

                    <div class="videos">
                        <h2 class="watch mb-3">Watch This Video To Learn More About Us!<i class="fab fa-youtube"></i></h2>
                        <iframe className="iframe-youtube" src="https://www.youtube.com/embed/Zb0dBqfwhls?start=122" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
                </div>
    );
};

export default ContactUs;