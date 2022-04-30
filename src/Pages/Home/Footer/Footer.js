import React from 'react';
import'./Footer.css'
import { AiFillGithub ,AiFillLinkedin } from 'react-icons/ai';
import { FaFacebook ,FaAppStoreIos } from 'react-icons/fa';
const Footer = () => {
    return (
        <div className='footer-main d-flex'>
            <div className='footer-child-1'>
                <h6>Copyright 2022 at Asif Iqbal</h6>
            </div>
            <div className='footer-child-2 d-flex'>
                <div>
                <FaFacebook/>
                </div>
                <div>
                    <AiFillGithub/>
                </div>
                <div>
                    <AiFillLinkedin/>
                </div>
                <div>
                    <FaAppStoreIos/>
                </div>
                
                </div>
        </div>
    );
};

export default Footer;