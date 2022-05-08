import React from 'react';
import { useForm } from "react-hook-form";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init';
import { toast, ToastContainer } from 'react-toastify';
import'./AddItems.css'
const AddItems = () => {
    const [user] = useAuthState(auth);
    console.log(user.email);
    const { register, handleSubmit } = useForm();
    const onSubmitForm = (data , event) =>{
        
        console.log(data);
        const url =`http://localhost:8000/products`;
        fetch(url,{
            method: 'POST',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res=> res.json())
        .then(res =>{
            toast('Your items is add our site !!');
            console.log(res);
            event.target.reset();
            
        })
    };
    return (
        <div className='w-100 add-items'>
            <div className=' w-50 mx-auto '>
            <h2>Please add New Car</h2>
            <form className='d-flex flex-column ' onSubmit={handleSubmit(onSubmitForm)}>
                <input className='mb-2' name='name' placeholder='Car Model Name' {...register("name")} />
                <input className='mb-2' name='number' placeholder='Car Price' type="number" {...register("price")} />
                <input className='mb-2' name='img' placeholder='Car Photo URL' type="text" {...register("img")} />
                <input className='mb-2' name='stock' placeholder='Stock' type="number" {...register("stock")} />
                <input className='mb-2' name='seller' placeholder='Seller' type="text" {...register("seller")} />
                <input className='mb-2' name='transmission' placeholder='Transmission' type="text" {...register("transmission")} />
                <textarea className='mb-2' name='description' placeholder='Description' {...register("description")} />
                <textarea className='mb-2' name='engine' placeholder='Engine' {...register("engine")} />
                <textarea className='mb-2' name='performance' placeholder='Performance' {...register("performance")} />
                <input className='mb-2 text-muted' name='email' type="email" value={user?.email}{...register("email")} />
                <input className='mb-4' type="submit" value="Add Item" />
            </form>
            <ToastContainer/>
        </div>
        </div>
    );
};

export default AddItems;