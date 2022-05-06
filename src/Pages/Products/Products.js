import React from 'react';
import'./Products.css'
import imgs from '../../Images/road (1).png'
import { FaRoad } from 'react-icons/fa';
import {useNavigate } from 'react-router-dom';
const Products = ({products}) => {
    const {_id , img , name,stock , seller , price , description } = products;
    const navigate = useNavigate();
    console.log(_id);
    const navigateToProductDetails = id => {
        navigate(`/manageItems/${id}`);
    }
    return (
        <div>
            <div className=' product-main mt-4'>
           <div className='product-img'>
           <img src={img} alt="" />
           </div>

            <div className='ms-3 products-text'>
                <div>
                <h6>$ <span className='price'>{price}</span></h6>
                    <h4>{name}</h4>
                    <p> {description.length>60?description.slice(0,60)+" ...":description}</p>
                    <h6> stock: <span>{stock} </span></h6>
                    <p> seller: <span>{seller}</span>  </p>
                    <p style={{height: '1px'}} className='erow w-100'></p>  
                </div>
                <div className='d-flex road'>
                    
                    <button className=' btn btn-primary' onClick={() => navigateToProductDetails(_id)} > Manage</button>
                    
                </div>
            </div>
            {/* <Link to='/checkout'>
            <button onClick={ () => navigateToServiceDetail(id)} className='btn btn-primary mt-3 mb-2'>Booking now</button>
            </Link>
             */}
        </div>
        </div>
    );
};

export default Products;