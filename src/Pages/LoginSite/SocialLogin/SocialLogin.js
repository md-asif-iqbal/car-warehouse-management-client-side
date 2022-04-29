import { Button } from 'bootstrap';
import React from 'react';
import'./SocialLogin.css'
import google from'../../../Images/login-img/google-logo.png'
const SocialLogin = () => {
    return (
        <div>
            
            <button className='google-login'>
                <img src={google} alt=""/>
                <span>Log in with Google</span>
            
            </button>

           <div className='d-flex align-items-center mb-2'>
           <div style={{height: '1px'}} className='bg-secondary w-50'></div>
            <h5 className='mt-2 px-2 text-secondary'>or</h5>
            <div style={{height: '1px'}} className='bg-secondary w-50'> </div>
           </div>
        </div>
    );
};

export default SocialLogin;