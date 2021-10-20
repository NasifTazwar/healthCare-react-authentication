import React from 'react';
import { FaPaperPlane } from 'react-icons/fa';
import './NewsLetter.css';


const NewsLetter = () => {
    return (
        <div>
            <div className="container-fluid text-white py-5 newsletter-container row mx-auto">
                <div className="col-lg-6 px-4">
                    <h1>Join Our Newsletter</h1>
                    <p>Newsletter emails keep your audience in the know of updates, news, and releases related to your product, services, or company.</p>
                </div>
                <div className="col-lg-6 mb-3">
                    <div className="row">
                        <div className="col-lg-8 col-md-8 col-sm-12 col-12 ">
                        <input type="email" className="form-control" placeholder="Recipient's email" aria-label="Recipient's email" aria-describedby="button-addon2"/>
                        </div>
                        <button className="icon-text btn btn-outline-secondary col-lg-3 col-md-4 col-sm-12 col-12" type="button" id="button-addon2">Subscribe <FaPaperPlane></FaPaperPlane></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsLetter;