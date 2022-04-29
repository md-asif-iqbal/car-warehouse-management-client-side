
import { FaUser } from 'react-icons/fa';
import React from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import img from'../../../Images/login-img/thumb-1.jpg'
import'./Login.css'
const Login = () => {
    return (
        <div className='login'>
            <div className='img'>
                <img src={img} alt=""/>
            </div>
            
            <Form className='forms-type'>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Email address</Form.Label>
                    <FaUser/>
                    <Form.Control  className='type' type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control className='type' type="password" placeholder="Password" />
                </Form.Group>
                <button className='btn btn-submit mb-4 mt-2' type="btn">Login</button>
            </Form>
           

        </div>
    );
};

export default Login;