import React from 'react';
import useProductDetails from '../../../hooks/useProductDetails';
import Products from '../../Products/Products';
import'./Featured.css'

const Featured = () => {
    const [product] = useProductDetails();
    console.log(product);

    return (
        <div className='container'>
            <div className='row'>
            <h2>Featured Listings</h2>
            <div className='product-container'>
            {
                product.slice(0,6).map(products => <Products
                key={products._id} products = {products}></Products>)
            }
            </div>
            </div>
            
        </div>
    );
};

export default Featured;