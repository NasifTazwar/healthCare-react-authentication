import React from 'react';

const Footer = () => {
    return (
        <div>
            <div className="d-flex flex-column h-100 bg-dark">
                <footer className="w-100 py-4 flex-shrink-0">
                    <div className="container py-4">
                        <div className="row">
                            <div className="col-lg-4 col-md-6">
                                <h5 className="h1 text-white">MediCare</h5>
                                <p className="small text-muted">Medicare provides health coverage to individuals 65 and older or those with a severe disability regardless of income.</p>
                                <p className="small text-muted mb-0">&copy; Copyrights. All rights reserved.</p>
                            </div>
                            <div className="col-lg-2 col-md-6">
                                <h5 className="text-white mb-3">Quick links</h5>
                                <ul className="list-unstyled text-muted">
                                    <li>Home</li>
                                    <li>Services</li>
                                    <li>Get started</li>
                                    <li>FAQ</li>
                                </ul>
                            </div>
                            <div className="col-lg-2 col-md-6">
                                <h5 className="text-white mb-3">Quick links</h5>
                                <ul className="list-unstyled text-muted">
                                    <li>Home</li>
                                    <li>Services</li>
                                    <li>Blogs</li>
                                    <li>Contact Us</li>
                                </ul>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <h5 className="text-white mb-3">Newsletter</h5>
                                <input className="form-control" type="text" placeholder="Enter Your Email" />
                                <form action="#">
                                </form>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default Footer;