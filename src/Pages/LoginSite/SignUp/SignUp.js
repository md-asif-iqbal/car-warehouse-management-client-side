import React from 'react';
import { Form } from 'react-bootstrap';
import'./SignUp.css'
import { Link } from 'react-router-dom';
import img from'../../../Images/login-img/thumb-1.jpg'
import SocialLogin from '../SocialLogin/SocialLogin';
const SignUp = () => {
    return (
        <div className='logins'>
            <div className='img'>
                <img src={img} alt=""/>
            </div>
            
            <Form className='forms-types mt-4 p-4'>
                <h2 className='mb-2'>Create your account</h2>
                <SocialLogin></SocialLogin>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control  className='type' type="text" placeholder="Enter your name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control  className='type' type="email" placeholder="Enter your email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Phone Numbers</Form.Label>
                    <Form.Control  className='type' type="number" placeholder="Enter your number" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control className='type' type="password" placeholder="Enter your password" required/>
                </Form.Group>
                
                <button className='btn btn-submit mb-4 mt-2' type="btn">Sign up</button>
                <p>Do You have an account?<Link to="/login" className="text-decoration-none text-primary" > Please Log in</Link> </p>
            </Form>
           

        </div>
    );
};

export default SignUp;