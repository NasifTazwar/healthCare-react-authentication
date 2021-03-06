import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './ServiceDetails.css';

const ServiceDetails = () => {
    const {serviceId} = useParams();

    
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);
    const element = services.filter(service => service.id == serviceId);
    // console.log(element);
    return (
        <div className="container">
            {
                element.map(el=>
                    <div className="details-container">
                    <div className="card mb-3 card-container">
                        <div className="row no-gutters">
                            <div className="col-md-3">
                            <img className="img-fluid" src={el.img} alt="..."/>
                            </div>
                            <div className="col-md-9">
                            <div className="card-body">
                                <h2 className="card-title">{el.name}</h2>
                                <p className="card-text">{el.descriptionAll}</p>
                            </div>
                            </div>
                        </div>
                    </div>
                    </div>
                    
                )
            }
        </div>
    );
};

export default ServiceDetails;