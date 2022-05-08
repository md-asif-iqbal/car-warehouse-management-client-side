import React from 'react';
import'./Footer.css'
import { AiFillGithub ,AiFillLinkedin } from 'react-icons/ai';
import { FaFacebook ,FaAppStoreIos } from 'react-icons/fa';
import { RiRoadMapLine } from 'react-icons/ri';
import { FcCallback ,FcAssistant } from 'react-icons/fc';
import { IoCarSportOutline } from 'react-icons/io5';
const Footer = () => {
    return (
        <div>
            <div className='footer-main'>
            <div className='child-footer'>
                <div className='first-part'>
                    <div className='font-icon me-2 ms-5'>
                    <RiRoadMapLine/>
                    </div>
                    <div className='text-part'>
                        <h5>Dhaka ,AZ 1221</h5>
                        <h5>501Archwood Lane</h5>
                    </div>
                </div>
                <div className='first-part'>
                    <div className='font-icon me-2 ms-5'>
                    <FcCallback/>
                    </div>
                    <div className='text-part'>
                        <h5>Feel Free to Call Us Now</h5>
                        <h5>(520) 577 2710</h5>
                    </div>
                </div>
                <div className='first-part'>
                    <div className='font-icon me-2 ms-5'>
                    <FcAssistant/>
                    </div>
                    <div className='text-part'>
                        <h5>24/7 Roadside Assistance</h5>
                        <h5>(520) 577 2725</h5>
                    </div>
                </div>
            </div>
            <div style={{height: '1px'}} className='bg-secondary w-100 mt-3 '> </div>
            <div className='footer-child1'>
                <div className='footer-child2 mx-auto'>
                    <div className='text-part'>
                    <h4>About Us</h4>
                    <p style={{height: '3px'}} className='bg-secondary w-25 mt-3'></p>
                    <p>Dhaka ,AZ 1221</p>
                    <p>501Archwood Lane</p>
                    <p>Mobile: (520) 577 2710</p>
                    <p>Assistance: (520) 577 2725</p>
                    <p>E-mail: info24@gmail.com</p>
                    <div className='d-flex link'>
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
                    <div className='text-part'>
                    <h4>Our Collections Brand</h4>
                    <p style={{height: '3px'}} className='bg-secondary  w-25 mt-3 '> </p>
                        <p><IoCarSportOutline/><span className='ms-4'>Lamborghini</span></p>
                        <p><IoCarSportOutline/><span className='ms-4'>BMW</span> </p>
                        <p><IoCarSportOutline/><span className='ms-4'>Audi</span> </p>
                        <p><IoCarSportOutline/><span className='ms-4'>Marcedes</span></p>
                        <p><IoCarSportOutline/><span className='ms-4'>Rolls Royce</span></p>
                        <p><IoCarSportOutline/><span className='ms-4'>Tesla</span></p>
                        <p><IoCarSportOutline/><span className='ms-4'>Bugatti</span></p>
                    
                    </div >
                    <div className='text-part'>
                    <h4>Hours</h4>
                    <p style={{height: '3px'}} className='bg-secondary w-25 mt-3 '> </p>
                        <div className='d-flex'>
                        <p> Saturday: </p><span className='ms-4'>10am - 10pm</span>
                        </div>
                        <div className='d-flex'>
                        <p> Sunday: </p><span className='ms-4'>10am - 10pm</span>
                        </div>
                        <div className='d-flex'>
                        <p> Monday: </p><span className='ms-4'>10am - 10pm</span>
                        </div>
                        <div className='d-flex'>
                        <p> Tuesday: </p><span className='ms-4'>10am - 10pm</span>
                        </div>
                        <div className='d-flex'>
                        <p> Wednesday: </p><span className='ms-4'>10am - 10pm</span>
                        </div>
                        <div className='d-flex'>
                        <p> Thursday: </p><span className='ms-4 text'>Closed</span>
                        </div>
                        <div className='d-flex'>
                        <p> Friday: </p><span className='ms-4'>Closed</span>
                        </div>
                    </div>

                </div>
                        
            </div>
            
        </div>
        <div className='copy-right'>
                            <div className='copy-text'>
                                <p>© Copyright 2022 <span> Car-Collectio </span> Theme by <span>Asif Iqbal</span></p>
                            </div>
                        </div>
        </div>
        
    );
};

export default Footer




