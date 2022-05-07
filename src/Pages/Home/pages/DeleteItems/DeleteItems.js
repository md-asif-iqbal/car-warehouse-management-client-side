import React from 'react';
import useProductDetails from '../../../../hooks/useProductDetails';
import DeleteItemsDetails from '../DeleteItemsDetails/DeleteItemsDetails';

const DeleteItems = () => {
    const [product] = useProductDetails();
    
    return (
        <div>
            <h2>This is Delete Inventory</h2>
            {
                product.map(products => <DeleteItemsDetails
                products={products}
                key={products._id}
                ></DeleteItemsDetails>)
            }
        </div>
    );
};

export default DeleteItems;


{/* <div key={products._id}>
                    <h2>{products.name}</h2>
                </div> */}