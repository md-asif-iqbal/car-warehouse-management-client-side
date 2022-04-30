import { Button } from 'bootstrap';
import React from 'react';
import'./SocialLogin.css'
import google from'../../../Images/login-img/google-logo.png'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
const SocialLogin = () => {
    let errorElements;
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    if (error) {
        errorElements=
            <div>
              <p className='text-danger'>{error?.message}</p>
            </div>
         
      }
    return (
        <div>
            
            <button className='google-login' onClick={ ()=>signInWithGoogle()}>
                <img src={google} alt=""/>
                <span>Log in with Google</span>
            
            </button>
            {errorElements}

           <div className='d-flex align-items-center mb-2'>
           <div style={{height: '1px'}} className='bg-secondary w-50'></div>
            <h5 className='mt-2 px-2 text-secondary'>or</h5>
            <div style={{height: '1px'}} className='bg-secondary w-50'> </div>
           </div>
        </div>
    );
};

export default SocialLogin;