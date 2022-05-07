
import { useEffect, useState } from "react";

const useProductId = productId =>{
    const [products, setProducts] = useState({});

    useEffect( () =>{
        const url = `http://localhost:8000/products/${productId}`;
        console.log(url);
        fetch(url)
        .then(res=> res.json())
        .then(data => setProducts(data));

    }, [productId]);
    return [products , setProducts]
}

export default useProductId ;
