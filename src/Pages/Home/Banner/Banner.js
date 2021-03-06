import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/carousal/1.png';
import banner2 from '../../../images/carousal/2.png';
import banner3 from '../../../images/carousal/3.png';
import './Banner.css';

const Banner = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100 carosal-img"
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3 className="text-dark">Excellent In Medical Research</h3>
                        <p className="text-dark">Not only is clinical research a fulfilling career, but it's also a challenging one. </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 carosal-img"
                        src={banner2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3 className="text-dark">Top Notch Medical Equipment</h3>
                        <p className="text-dark">Hometown Healthcare offers a wide selection of top-notch home medical equipment and supplies</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 carosal-img"
                        src={banner3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3 className="text-dark">24/7 Ambulance and Hospital Service</h3>
                        <p className="text-dark">Get in touch with our awesome service. Feel free to contact with us.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Banner;