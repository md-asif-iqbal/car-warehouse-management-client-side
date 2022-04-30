import React from 'react';
import { Form } from 'react-bootstrap';
import'./SignUp.css'
import { Link } from 'react-router-dom';
import img from'../../../Images/login-img/thumb-1.jpg'
import SocialLogin from '../SocialLogin/SocialLogin';
import { useCreateUserWithEmailAndPassword, useSendEmailVerification } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
const SignUp = () => {

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] =  useCreateUserWithEmailAndPassword(auth);
      const [sendEmailVerification] = useSendEmailVerification(
        auth
      );

const HandleSignUp = async (event) =>{
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const number = event.target.number.value;
    const password = event.target.password.value;
    await createUserWithEmailAndPassword(email , password);
    await sendEmailVerification();
    console.log(name,email,number,password);
    
}

    return (
        <div className='login'>
            <div className='img'>
                <img src={img} alt=""/>
            </div>
            <div className='forms-type mt-2 p-4'>
                <h2 className='mb-2'>Create your account</h2>
                <SocialLogin></SocialLogin>
            <Form  onSubmit={HandleSignUp}>
            
                <Form.Group className="mb-3" controlId="formGroupName">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control  className='type' type="text" name='name' placeholder="Enter your name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control  className='type' type="email" name='email' placeholder="Enter your email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPhone">
                    <Form.Label>Phone Numbers</Form.Label>
                    <Form.Control  className='type' type="number" name='number' placeholder="Enter your number" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control className='type' type="password" name='password' placeholder="Enter your password" required/>
                </Form.Group>
                
                <button className='btn btn-submit mb-4 mt-2' type="btn" value="SignUp">Sign up</button>
                <p>Do You have an account?<Link to="/login" className="text-decoration-none text-primary" > Please Log in</Link> </p>
            </Form>
            </div>
            
           

        </div>
    );
};

export default SignUp;