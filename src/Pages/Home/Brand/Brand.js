import React from 'react';
import'./Brand.css'
import lambo from'../../../Images/homePage/cars Brand/Lam.png'
import bmw from'../../../Images/homePage/cars Brand/BMW i8.jpeg'
import audi from'../../../Images/homePage/cars Brand/audi.webp'
import ferrari from'../../../Images/homePage/cars Brand/Ferrari.png'
import mercedes from'../../../Images/homePage/cars Brand/mercedes.jpeg'
import rr from'../../../Images/homePage/cars Brand/Rr-Ghost.jpeg'
import { Card } from 'react-bootstrap';
const Brand = () => {
    return (
        <div className='mt-4'>
            <h2>BRAND</h2>
            <div className='brand mb-5 mt-3'>
            <Card  className='brand-cards'>
                <Card.Img variant="top" src={lambo} />
                <Card.Body>
                <Card.Title>Lamborghini</Card.Title>
                </Card.Body>
            </Card>
            <Card className='brand-cards'>
                <Card.Img variant="top" src={bmw} />
                <Card.Body>
                <Card.Title>BMW</Card.Title>
                </Card.Body>
            </Card>
            <Card className='brand-cards'>
                <Card.Img variant="top" src={audi} />
                <Card.Body>
                <Card.Title>Audi</Card.Title>
                </Card.Body>
            </Card>
            <Card className='brand-cards'>
                <Card.Img variant="top" src={ferrari} />
                <Card.Body>
                <Card.Title>Ferrari</Card.Title>
                </Card.Body>
            </Card>
            <Card className='brand-cards'>
                <Card.Img variant="top" src={mercedes} />
                <Card.Body>
                <Card.Title>Marcedes</Card.Title>
                </Card.Body>
            </Card>
            <Card className='brand-cards'>
                <Card.Img variant="top" src={rr} />
                <Card.Body>
                <Card.Title>Rolls Royce</Card.Title>
                </Card.Body>
            </Card>
            </div>
        </div>
    );
};

export default Brand;