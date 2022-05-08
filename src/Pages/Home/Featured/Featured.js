import React from 'react';
import useProductDetails from '../../../hooks/useProductDetails';
import Products from '../Products/Products';
import'./Featured.css'
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import Loading from '../Loading/Loading';

const Featured = () => {
    const [product] = useProductDetails();
    // console.log(product);

    if (product.length===0) {
        return <Loading></Loading>
    }

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
                <div className='show-all mt-2 mb-5'>
                <Link className='btn' to='/inventory'>Show All <span><AiOutlinePlusCircle/></span></Link>
                </div>
            </div>
            
        </div>
    );
};

export default Featured;