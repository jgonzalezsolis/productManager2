import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {Link} from "react-router-dom"
//rafce to create a new blank component
//essentials
//lifting state, 
//forms, 
//needs state, 
//useEffect, 
//axios, 
const DisplayAll = () => {
    // const {removeFromDom, allProducts, setAllProducts} = props;

    const [allProducts, setAllProducts] = useState([])
    
    useEffect(()=>{
        axios.get("http://localhost:8000/api/products")
        .then((res)=>{
            console.log(res.data)
            setAllProducts(res.data)
        })
        .catch((err)=>{console.log(err)})
    }, []);
    
    // const deleteProduct = (id) => {
    //     axios.delete(`http://localhost:8000/api/products/${id}`)
    //         .then(res => {
    //             removeFromDom(id)
    //         })
    //         .catch(err => console.log(err))
    // }
    
    return (
        <div>
            <h1>Product Manager</h1>
            <h2>All Products</h2>
                {
                    allProducts.map((product)=>(
                        <div key={product._id}>
                            <div>
                                <h3>{product.title}</h3>
                            </div>
                            <div>
                            <Link to={`/product/${product._id}`}> Details</Link>
                            {/* <button onClick={(e)=>{deleteProduct(product._id)}} className="delete-button">Delete</button> */}
                            </div>
                            <Link to={`/product/edit/${product._id}`} className="edit-link">Edit</Link>
                            <div>

                            </div>
                        </div>
                ))
                }
        </div>
    )
    }


export default DisplayAll



