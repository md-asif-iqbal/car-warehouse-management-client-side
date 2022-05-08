import React from 'react';
import { useNavigate } from 'react-router-dom';
import'./MyItemsDetails.css'
const MyItemsDetails = ({item}) => {
    const {_id , img , name,stock , seller , price , description } = item;
    const navigate = useNavigate();
    const navigateToProductDetails = id => {
        navigate(`/manageItems/${id}`);
    }
    return (
        <div>
            <div className=' item-main  mt-4'>
           <div className='item-img'>
           <img src={img} alt="" />
           </div>

            <div className='  ms-3 '>
                <div className='text-cont'>
                <h6>$ <span className='price'>{price}</span></h6>
                    <h4>{name}</h4>
                    <p> {description.length>60?description.slice(0,60)+" ...":description}</p>
                    <h6> stock: <span>{stock} </span></h6>
                    <p> seller: <span>{seller}</span>  </p>
                    <p style={{height: '1px'}} className='erow w-100'></p>  
                </div>
                <div className='text-cont'>
                    
                    <button className=' btn btn-primary' onClick={() => navigateToProductDetails(_id)} > Manage</button>
                    
                </div>
            </div>
        
        </div>
        </div>
    );
 };
export default MyItemsDetails;