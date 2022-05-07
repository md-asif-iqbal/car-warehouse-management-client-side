import React from 'react';
import { useForm } from "react-hook-form";

const AddItems = () => {
    const { register, handleSubmit } = useForm();
    const onSubmitForm = data =>{
        console.log('yes');
        const url =`http://localhost:8000/products`;
        fetch(url,{
            method: 'POST',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res=> res.json())
        .then(res =>{console.log(res);
        })
    };
    return (
        <div className=' w-50 mx-auto mb-5'>
            <h2>Please add New Car</h2>
            <form className='d-flex flex-column ' onSubmit={handleSubmit(onSubmitForm)}>
                <input className='mb-2' placeholder='Car Model Name' {...register("name", { required: true, maxLength: 30 })} />
                
                <input className='mb-2' placeholder='Car Price' type="number" {...register("price")} />
                <input className='mb-2' placeholder='Car Photo URL' type="text" {...register("img")} />
                <input className='mb-2' placeholder='Stock' type="number" {...register("stock")} />
                <input className='mb-2' placeholder='Seller' type="text" {...register("seller")} />
                <input className='mb-2' placeholder='Transmission' type="text" {...register("transmission")} />
                <textarea className='mb-2' placeholder='Description' {...register("description")} />
                <textarea className='mb-2' placeholder='Engine' {...register("engine")} />
                <textarea className='mb-2' placeholder='Performance' {...register("performance")} />
                <input type="submit" value="Add Item" />
            </form>
        </div>
    );
};

export default AddItems;