import React from 'react';
import useProductDetails from '../../../../hooks/useProductDetails';
import DeleteItemsDetails from '../DeleteItemsDetails/DeleteItemsDetails';
import { toast, ToastContainer } from 'react-toastify';
const DeleteItems = () => {
    const [product , setProduct] = useProductDetails();
    ;
    const handleRemoveProduct = id =>{
        const proceed = window.confirm('Are you sure Delete this Items?');
        if(proceed){
            const url =`http://localhost:8000/products/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast('Your items is Deleted our site please reload !!');
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