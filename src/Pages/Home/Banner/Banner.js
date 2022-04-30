import React from 'react';
import"./Banner.css"
import car from "../../../Images/homePage/main-img 2.jpg"
const Banner = () => {
    return (
        <div className='banner'>
            <div className='banner-img'>
                <img src={car} alt=""/>
            </div>
            <div className='banner-text'>
                <h4>2022</h4>
                <h1>Find Your Next Match</h1>
                <h6>Find the right price, dealer and advice</h6>
                <button className='btn btn-type' type="">LEARN MORE</button>
            </div>
        </div>
    );
};

export default Banner;