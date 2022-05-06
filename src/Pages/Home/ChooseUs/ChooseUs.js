import React from 'react';
import'./ChooseUs.css'
import img1 from "../../../Images/Choose/price-tag (1).png"
import img2 from "../../../Images/Choose/car1.png"
import img3 from "../../../Images/Choose/insurance (1).png"

const ChooseUs = () => {
    return (
        <div className=''>
            <h1 className=''>Why Choose Us?</h1>
            <div className='main-div d-flex mt-3 mb-4'>
                <div className='child-div d-flex'>
                    <div>
                        <img src={img1} alt=""/>
                    </div>
                    <div className='choose-text'>
                        <h4>Best Price</h4>
                        <p>Our Stress-Free Finance Department 
                            That Can Find Financial Solutions
                             To Save You Money.</p>
                    </div>
                    
                </div>
                <div className='child-div d-flex'>
                    <div>
                        <img src={img2} alt=""/>
                    </div>
                    <div className='choose-text'>
                        <h4>Trusted By Thousands</h4>
                        <p>Our Stress-Free Finance Department 
                        That Can Find Financial Solutions To Save You Money.</p>
                    </div>
                    
                </div>
                <div className='child-div d-flex'>
                    <div>
                        <img src={img3} alt=""/>
                    </div>
                    <div className='choose-text'>
                        <h4>Wide Range of Brands</h4>
                        <p>Our Stress-Free Finance Department
                         That Can Find Financial Solutions
                          To Save You Money.</p>
                    </div>
                    
                </div>
            
            </div>
        </div>
    );
};

export default ChooseUs;