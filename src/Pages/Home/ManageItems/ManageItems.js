import React from 'react';
import { useParams } from 'react-router-dom';
import useProductId from '../../../hooks/useProductId';

const ManageItems = () => {
    const {productId} = useParams();
    const [products] = useProductId(productId);
    // const [name , img , price , description , engine,transmission,performance,stock,seller] 

    return (
        <div>
            <h2>This is manage Items {products.name}</h2>
            <div>
            <img src={products.img} alt=""/>
            </div>
            <div>
                <h2>{products.name}</h2>
                <h5>{products.price}</h5>
                <h5>{products.performance}</h5>
                <h5>{products.engine}</h5>
                <h5>{products.transmission}</h5>
                <h5>{products.description}</h5>
                <h5>{products.stock}</h5>
                <h5>{products.seller}</h5>
            </div>
        </div>
    );
};

export default ManageItems;