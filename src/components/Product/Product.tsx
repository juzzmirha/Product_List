import React, { useState } from "react";
import './product.css'
import { IProduct } from "../../models";

interface ProductProps{
    product:IProduct
}

export function Product({product}: ProductProps){
    const [details, setDetails] = useState(false)
    
    return(
        <div className="product">
            <img src={product.image} alt="" />
            <p>{product.title}</p>
            <p> {product.price} </p>
            <button onClick={() => setDetails(prev => !prev)}>{details ? 'Hide details' : 'Show Details'}</button>


            {details && <div>
                <p>{product.description}</p>
                <p style={{fontWeight: 'bold'}}>Rate: <span> {product?.rating?.rate} </span></p>
            </div>}
        </div>
    )
}