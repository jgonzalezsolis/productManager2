import React, { useEffect, useState } from 'react'
import {useNavigate, useParams} from "react-router-dom"
import axios from 'axios';
import {Link} from "react-router-dom"
//essentials
//lifting state, 
//forms, 
//needs state, 
//useEffect, 
//axios, 

const OneProduct = (props) => {
    const {id} =useParams();
    // console.log(id)
    const [product, setProduct] = useState({});
    const navigate = useNavigate();
    useEffect(()=>{
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res=>{
                console.log(res)
                console.log(res.data)
                setProduct(res.data)
            })
            .catch(err=>{console.log(err)})
    }, [id]);

    const handleDelete = () => {
    axios.delete(`http://localhost:8000/api/products/${id}`)
        .then(res =>{
            console.log(res)
        })
        .catch(err => { console.log(err)
        })
        navigate("/")
    }
    return (
    <div>
        <div>
            <h1>{product.title}</h1>
            <p>Price: ${product.price}</p>
            <p>Description: {product.description}</p>
            <button onClick={handleDelete} className="delete-button">Delete</button>
        </div>
    </div>
    )
}

export default OneProduct