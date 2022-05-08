import React from 'react';
import'./Home.css'
import Banner from '../Banner/Banner';
import Brand from '../Brand/Brand';
import ChooseUs from '../ChooseUs/ChooseUs';
import Featured from '../Featured/Featured';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Loading from '../Loading/Loading';
const Home = () => {
    const [loading] = useAuthState(auth);
    if(loading){
         <Loading></Loading>
    }
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