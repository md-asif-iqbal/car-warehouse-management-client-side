import React from 'react';
import { useParams } from 'react-router-dom';
import useProductId from '../../../hooks/useProductId';
import'./ManageItems.css'
const ManageItems = () => {
    const {productId} = useParams();
    const [products] = useProductId(productId);
    // const [name , img , price , description , engine,transmission,performance,stock,seller] 

    return (
        <div>
            <h2>This is manage Items {products.name}</h2>
            <div className='main'>
            <div className='product-imgs'>
            <img src={products.img} alt=""/>
            </div>
            <div className='info'>
                <h2>Model: {products.name}</h2>
                <h5>Price: ${products.price}</h5>
                <h5>Performance: {products.performance}</h5>
                <h5>Engine: {products.engine}</h5>
                <h5>Transmission: {products.transmission}</h5>
                <h5>Description:{products.description}</h5>
                <h5>Stock: {products.stock}</h5>
                <h5>Seller: {products.seller}</h5>
            </div>
            </div>
        </div>
    );
};

export default ManageItems;