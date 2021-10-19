import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({service}) => {
    const { id, name ,description , descriptionAll , img} = service;
    
    return (
        <div className="col-lg-4 col-md-4 service pb-3">
            {/*<Col>
                 <div>
                    <img className="img-fluid" src={img} alt="" />
                </div>
                <div>
                    <h3>{name}</h3>
                    <p className="px-3">{description}</p>
                    {/* <Link to={`/booking/${id}`}>
                        <button className="btn btn-warning" >Know Details</button>
                    </Link> */}
                    {/* <button className="btn btn-warning" >Know Details</button>
                </div>
            </Col> */}
            <Col>
                <div className="card h-100">
                    <img src={img} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{description}</p>
                    </div>
                    <div className="card-footer">
                        <Link to={`/details/${id}`}>
                            <button className="btn btn-warning">Know Details</button>
                        </Link>
                    </div>
                </div>
            </Col>
        </div>
    );
};

export default Service;