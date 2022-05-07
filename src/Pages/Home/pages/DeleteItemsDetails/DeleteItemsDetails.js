
import React from 'react';
import'./DeleteItemsDetails.css'
import bin from '../../../../Images/dustbin.png'
import useProductDetails from '../../../../hooks/useProductDetails';
import { toast, ToastContainer } from 'react-toastify';

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
                toast('Delete This Item please reload ')
            })
        }

    }
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
        <ToastContainer/>
    </div>
    );
};

export default DeleteItemsDetails;