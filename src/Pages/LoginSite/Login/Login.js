
import { FaUser } from 'react-icons/fa';
import React, { useRef } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import img from'../../../Images/login-img/thumb-1.jpg'
import'./Login.css'
import SocialLogin from '../SocialLogin/SocialLogin';
import { Link } from 'react-router-dom';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { async } from '@firebase/util';
import Loading from '../../Home/Loading/Loading';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    let errorElements;
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
      const [sendPasswordResetEmail ,sending] = useSendPasswordResetEmail(
        auth
      );

    const handleLogin = async (event)=>{
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        await signInWithEmailAndPassword();
        // console.log('found');

    }
    // handling Error

    if(error){
        errorElements=
            <div>
              <p className='text-danger'>{error?.message}</p>
            </div>
    }

    // -----password Reset code here------
    const passwordReset = async (event) =>{
        const email = emailRef.current.value;
        
        if(email){
           await sendPasswordResetEmail(email);
           toast.success('Please check your email 👌', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
           
        }
        else{
            toast.warn('Please enter your email address', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
        }
    }
    if(loading || sending){
        // asif check again sending after part also done
        // console.log('loading');
        return(
            <div className='login'>
            <div className='img'>
                <img src={img} alt=""/>
            </div>
            <div className='forms-type mt-5 p-4'>
                <h2 className='mb-4 mt-4'>Log in to your account</h2>
           
                <Loading></Loading>
            </div>
           

        </div>
          
            
           

        
            
        ) 
    }
    return (
        <div className='login'>
            <div className='img'>
                <img src={img} alt=""/>
            </div>
            <div className='forms-type mt-5 p-4'>
                <h2 className='mb-4 mt-4'>Log in to your account</h2>
                <SocialLogin></SocialLogin>
            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Email address</Form.Label>
                    <FaUser/>
                    <Form.Control  className='type' type="email" ref={emailRef} placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control className='type' type="password" ref={passwordRef} placeholder="Password" required/>
                </Form.Group>
                <button className='btn btn-submit mb-4 mt-2' type="btn" value='submit'>Log in</button>
                {errorElements}
                
            </Form>
            <p>Forget Password ?<button className="btn btn-link text-decoration-none text-primary pe-auto" onClick={passwordReset} > Reset Password</button> </p>
                <p>Don't have an account?<Link to="/signup" className="text-decoration-none text-primary pe-auto" > Please Sign Up</Link> </p>
            </div>
           
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                />
        </div>
    );
};

export default Login;