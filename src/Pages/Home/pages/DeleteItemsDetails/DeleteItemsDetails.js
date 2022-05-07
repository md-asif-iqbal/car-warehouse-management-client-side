
import React from 'react';
import'./DeleteItemsDetails.css'
import bin from '../../../../Images/garbage.png'
import useProductDetails from '../../../../hooks/useProductDetails';

const DeleteItemsDetails = ({products}) => {
    const {_id , img , name,stock , price} = products;
    const [product, setProduct] = useProductDetails();
    const handleRemoveProduct = id =>{
        const proceed = window.confirm('Are you sure Delete this Items?');
        if(proceed){
            const url =`http://localhost:8000/products/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                const remainingProduct = product.filter(products => products._id !== id);
                setProduct(remainingProduct);
            })
        }

    }
    return (
        <div className='delete-item mb-5'>
        <div className='delete-items'>
            <img src={img} alt="" />
        </div>
        <div className="delete-item-container">
            <div className="delete-item-details">
                <p className="product-name">
                    {name.length> 10 ? name.slice(0, 10) + '...': name }
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