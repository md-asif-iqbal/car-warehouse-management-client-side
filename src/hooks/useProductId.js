
import { useEffect, useState } from "react";

const useProductId = productId =>{
    const [products, setProduct] = useState({});

    useEffect( () =>{
        const url = `http://localhost:8000/products/${productId}`;
        console.log(url);
        fetch(url)
        .then(res=> res.json())
        .then(data => setProduct(data));

    }, [productId]);
    return [products]
}

export default useProductId ;
