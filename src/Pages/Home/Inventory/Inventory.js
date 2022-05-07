import React from 'react';
import useProductDetails from '../../../hooks/useProductDetails';
import InventoryDetails from '../InventoryDetails/InventoryDetails';

import'./Inventory.css'
const Inventory = () => {
    const [product] = useProductDetails();
    return (
        <div>
            
            <div className='container-main'>
            <h2 className='mt-4'>Inventory Total({product.length})</h2>
            <div className='child-cont'>
            {
                product.map(products => <InventoryDetails
                    key={products._id} products = {products}>

                </InventoryDetails>)
            }
            </div>
            
        </div>
        </div>
    );
};

export default Inventory;