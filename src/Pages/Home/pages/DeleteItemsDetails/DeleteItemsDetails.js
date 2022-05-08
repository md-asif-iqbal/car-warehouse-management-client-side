
import React from 'react';
import'./DeleteItemsDetails.css'
import bin from '../../../../Images/dustbin.png'
import useProductDetails from '../../../../hooks/useProductDetails';


const DeleteItemsDetails = ({products ,handleRemoveProduct}) => {
    const {_id , img , name,stock , price} = products;
    
    
    return (
        <div className='delete-item '>
        <div className='delete-items'>
            <img src={img} alt="" />
        </div>
        <div className="delete-item-container">
            <div className="delete-item-details">
                <p className="product-name">
                    {name.length> 20 ? name.slice(0, 20) + '...': name }
                </p>
                <p>Price: <span className=''>${price}</span></p>
                
                <p ><small>Stock: {stock}</small></p>
            </div>
            <div className="delete-container">
                <button className='delete-button' onClick={() => handleRemoveProduct(products._id)}>
                <img src={bin} alt=""/>
                </button>
            </div>
        </div>
        
    </div>
    );
};

export default DeleteItemsDetails;