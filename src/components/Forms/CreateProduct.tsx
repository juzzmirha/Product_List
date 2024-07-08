import React, { useState, ChangeEvent, FormEvent } from "react";
import './create.css'
import { IProduct } from "../../models";
import axios from "axios";
import { ErrorMessage } from "../ErrorMessage";


const ProductData: IProduct = {
    id:2,
    title: 'test product',
    price: 13.5,
    description: 'lorem ipsum set',
    image: 'https://i.pravatar.cc',
    category: 'electronic',
    rating:{
        rate: 42,
        count: 10
    }
}

interface CreateProductProps {
    onCreate:  (product: IProduct) => void
}


export function CreateProduct({onCreate} : CreateProductProps){

    const [value, setValue] = useState('')
    const [error, setError] = useState('')

    const submitHandler = async (event:React.FormEvent) =>{
        event.preventDefault()
        setError('')

        if(value.trim().length === 0){
            setError('Enter the valid title.')
            return
        }

        ProductData.title = value
        const response = await axios.post<IProduct>('https://fakestoreapi.com/products', ProductData)


        onCreate(response.data)
    }

    const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };
    return(
        <form onSubmit={submitHandler}>
            <input type="text" 
            placeholder="Write product title..."
            value={value}
            onChange={changeHandler}
            />
           

            {error && <ErrorMessage error={error}/>}
            <button type="submit">Create</button>
        </form>
    )
}