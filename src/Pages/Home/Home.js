import React from 'react';
import ContactUs from '../Shared/ContactUs/ContactUs';
import NewsLetter from '../Shared/NewsLetter/NewsLetter';
import Banner from './Banner/Banner';
import Services from './Services/Services';

const Home = () => {
    return (
        <div id="home">
            <Banner></Banner>
            <Services></Services>
            <ContactUs></ContactUs>
            <NewsLetter></NewsLetter>
        </div>
    );
};

export default Home;