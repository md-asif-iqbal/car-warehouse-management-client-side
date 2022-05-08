import { useEffect, useState } from "react";

const useProductDetails =()  =>{
    const [product, setProduct] = useState([]);

    useEffect( () =>{
        const url = `https://still-ocean-23705.herokuapp.com/products`;
        
        fetch(url)
        .then(res=> res.json())
        .then(data => setProduct(data));


    }, []);

    return [product , setProduct]
}

export default useProductDetails;