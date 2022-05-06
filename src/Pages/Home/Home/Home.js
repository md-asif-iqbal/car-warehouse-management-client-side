import React from 'react';
import'./Home.css'
import Banner from '../Banner/Banner';
import Brand from '../Brand/Brand';
import ChooseUs from '../ChooseUs/ChooseUs';
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Brand></Brand>
            <ChooseUs></ChooseUs>
        </div>
    );
};

export default Home;