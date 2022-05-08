import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import axiosPrivate from '../../../../api/axiosPrivate';
import auth from '../../../../firebase.init';
import MyItemsDetails from '../MyItemsDetails/MyItemsDetails';
import'./MyItems.css'
const MyItems = () => {
    const [user] = useAuthState(auth);
    const [items, setItems] = useState([]);
    const navigate = useNavigate();
    
    useEffect( () => {
        
        const getItems = async() =>{
            const email = user?.email;
            const url = `https://still-ocean-23705.herokuapp.com/items?email=${email}`;
            
            try{
                const {data} = await axios.get(url)
                
                setItems(data);

            }
            catch(error){
                console.log(error.message);
                if(error.response.status === 401 || error.response.status === 403){
                    signOut(auth);
                    navigate('/login')
                }
            }
        }
        getItems();

    }, [user])
    return (
        <div>
            
            <h2>This is your Items: {items.length}</h2>
            <div className='myItems'>
            {
                items.map(item => <MyItemsDetails key={item._id}
                item = {item}>
                </MyItemsDetails>)
            }
            </div>
        </div>
    );
};

export default MyItems;