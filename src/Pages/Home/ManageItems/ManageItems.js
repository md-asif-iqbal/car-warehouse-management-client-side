import { Button } from 'bootstrap';
import React from 'react';
import { Col, Form, FormControl, InputGroup, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import useProductId from '../../../hooks/useProductId';
import'./ManageItems.css'
const ManageItems = () => {
    const {productId} = useParams();
    const [products] = useProductId(productId);
// -------update Stock here----------------
    const handleAddStock = (event) =>{
        event.preventDefault();
        const id = products._id;
        // console.log(id);
        const oldStock = products.stock;
        const stock = parseInt(event.target.number.value);
        const newStock = parseInt(oldStock+stock)
        // console.log(newStock);
        const url = `https://still-ocean-23705.herokuapp.com/products/${id}`
        console.log(url);
        fetch(url , {
            method: 'PUT',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify({newStock}),
        })
        .then(res=> res.json())
        .then(result =>{
            toast('This Item add new stock please reload!!!')
            console.log(result);
            event.target.reset();
        }) 

     
    }
       // ---=-=-=-=-=-=-Delivered Minus Stock here=----=====-=-=
       const handleDeliveredStock =() =>{
        const id = products._id;
        // console.log(id);
        const oldStock = products.stock;
        
        const newStock = parseInt(oldStock-1)
         console.log(newStock);
        const url = `https://still-ocean-23705.herokuapp.com/products/${id}`
        console.log(url);
        fetch(url , {
            method: 'PUT',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify({newStock}),
        })
        .then(res=> res.json())
        .then(result =>{
            toast('Update Stock successfully please reload!!!')
            console.log(result);
        }) 
            
    }
    // const [name , img , price , description , engine,transmission,performance,stock,seller] 

    return (
        <div>
            <h2 className='mt-5 mb-4'>This is Items {products.name}</h2>
            <div className='main mb-5'>
            <div className='product-imgs'>
            <img src={products.img} alt=""/>
            </div>
            <div className='info'>
                <h2>Model: {products.name}</h2>
                <h5>Price: ${products.price}</h5>
                <h5>Performance: {products.performance}</h5>
                <h5>Engine: {products.engine}</h5>
                <h5>Transmission: {products.transmission}</h5>
                <h5>Description:{products.description}</h5>
                <h5>Stock: {products.stock}</h5>
                <h5>Seller: {products.seller}</h5>
                <div className='d-flex'>
                    <div >
                    <Form onSubmit={handleAddStock} >
                        <Row className="align-items-center">
                            <Col xs="auto">
                            <Form.Label htmlFor="inlineFormInput" visuallyHidden>
                            </Form.Label>
                            <Form.Control
                                type='number'
                                name='number'
                                className="mb-2"
                                id="inlineFormInput"
                                placeholder="Stock"
                            />
                            </Col>
                            <Col xs="auto">
                            <button type="submit" className="mb-2 btn btn-primary">
                                Stock
                            </button>
                            </Col>
                        </Row>
                    </Form>
                    </div>
                    <div>
                    <button className='btn btn-primary ms-5 ' type="submit" onClick={handleDeliveredStock}>
                            Delivered
                        </button>
                    </div>
                </div>
            </div>
            </div>
            <ToastContainer/>
        </div>
    );
};

export default ManageItems;