import { useEffect, useState } from "react";

const useProductDetails =()  =>{
    const [product, setProduct] = useState([]);

    useEffect( () =>{
        const url = `http://localhost:8000/products`;
        
        fetch(url)
        .then(res=> res.json())
        .then(data => setProduct(data));


    }, []);

    return [product]
}

export default useProductDetails;