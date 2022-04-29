
import { FaUser } from 'react-icons/fa';
import React from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import img from'../../../Images/login-img/thumb-1.jpg'
import'./Login.css'
import SocialLogin from '../SocialLogin/SocialLogin';
import { Link } from 'react-router-dom';
const Login = () => {
    return (
        <div className='login'>
            <div className='img'>
                <img src={img} alt=""/>
            </div>
            
            <Form className='forms-type mt-5 p-4'>
                <h2 className='mb-4 mt-4'>Log in to your account</h2>
                <SocialLogin></SocialLogin>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Email address</Form.Label>
                    <FaUser/>
                    <Form.Control  className='type' type="email" placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control className='type' type="password" placeholder="Password" required/>
                </Form.Group>
                <p>Forget Password ?<button className="btn btn-link text-decoration-none text-primary pe-auto" > Reset Password</button> </p>
      
                <button className='btn btn-submit mb-4 mt-2' type="btn">Log in</button>
                <p>Don't have an account?<Link to="/signup" className="text-decoration-none text-primary pe-auto" > Please Sign Up</Link> </p>
            </Form>
           

        </div>
    );
};

export default Login;