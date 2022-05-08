import React from 'react';
import'./Home.css'
import Banner from '../Banner/Banner';
import Brand from '../Brand/Brand';
import ChooseUs from '../ChooseUs/ChooseUs';
import Featured from '../Featured/Featured';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Loading from '../Loading/Loading';
import useProductDetails from '../../../hooks/useProductDetails';
const Home = () => {
    const [product] = useProductDetails();
    if (product.length===0) {
        return (
            <div className='mt-5'>
                <Loading></Loading>
            </div>
        )
    }
    // if(){
    //      <Loading></Loading>
    // }
    return (
        <div>
            
            <Banner></Banner>
            <Brand></Brand>
            <ChooseUs></ChooseUs>
            <Featured></Featured>
            
        </div>
    );
};

export default Home;