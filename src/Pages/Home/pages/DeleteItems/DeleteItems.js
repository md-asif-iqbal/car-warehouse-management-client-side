import React from 'react';
import useProductDetails from '../../../../hooks/useProductDetails';
import DeleteItemsDetails from '../DeleteItemsDetails/DeleteItemsDetails';
import { toast, ToastContainer } from 'react-toastify';
import Loading from '../../Loading/Loading';
const DeleteItems = () => {
    const [product , setProduct] = useProductDetails();
    if (product.length===0) {
        return (
            <div className='mt-5'>
                <Loading></Loading>
            </div>
        )
    }
    const handleRemoveProduct = id =>{
        const proceed = window.confirm('Are you sure Delete this Items?');
        if(proceed){
            const url =`https://still-ocean-23705.herokuapp.com/products/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast('Your items is Deleted our site');
                const remainingProduct = product.filter(products => products._id !== id);
                setProduct(remainingProduct);
                
            })
        }

    }
    
    return (
        <div>
            <h2 className='mb-4 mt-5'>Do you want Delete this Inventory({product.length})</h2>
            {
                product.map(products => <DeleteItemsDetails
                products={products}
                key={products._id}
                handleRemoveProduct ={handleRemoveProduct}

                ></DeleteItemsDetails>)
            }
            <ToastContainer/>
        </div>
    );
};

export default DeleteItems;


{/* <div key={products._id}>
                    <h2>{products.name}</h2>
                </div> */}