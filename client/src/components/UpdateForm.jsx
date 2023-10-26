import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";
const Update = (props) => {
    const [product, setProduct] = useState ({
        title: '',
        price: 0,
        description: ''
    })
    const { id } = useParams(); //this process is identical to the one we used with our Details.js component
    const navigate = useNavigate();
    const [error, setError] = useState({})
    const handleChange= (e)=>{
        setProduct({...product, [e.target.name]: e.target.value})
    }
    // retrieve the current values for this person so we can fill
    // in the form with what is in the db currently
    useEffect(()=>{
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res=>{
                console.log(res)
                console.log(res.data)
                setProduct(res.data)
            })
            .catch(err=>{console.log(err)})
    }, [id]);

    const updateProduct = (e) => {
        e.preventDefault();
        axios.patch(`http://localhost:8000/api/products/${id}`, product)
            .then(res => {
                console.log(res);
                navigate(`/product/${id}`)  //this will take us to the details page for this product
                //navigate('/product/' + id)  //and this is a way of using id without `` and no javascript {}, will take us to the details page for this product
                // navigate("/"); // this will take us back to the Main.js
            })
            .catch(err => {
            console.log(err.response.data.error.errors)
            setError(err.response.data.error.errors)
            // navigate("/")
        })
    }
    return (
        <div>
            <h1>Update the Product</h1>
            <form onSubmit={updateProduct}>
                <div>
                    <label>Title:</label><br/>
                    {/* When the user types in this input, our onChange synthetic event 
                        runs this arrow function, setting that event's target's (input) 
                    value (what's typed into the input) to our updated state   */}
                    <input type="text" name='title' value={product.title} onChange={handleChange} />
                    {
                        error.title ?
                        <p>{error.title.message}</p>
                        :
                        null
                    }
                    </div>
                    <div>
                    <label>Price:</label><br/>
                    <input type="number" name='price' value={product.price} onChange={handleChange} />
                    {
                        error.price ?
                        <p>{error.price.message}</p>
                        :
                        null
                    }
                </div>
                <div>
                    <label>Description:</label><br/>
                    <input type="text" name='description' value={product.description} onChange={handleChange}/>
                    {
                        error.description ?
                        <p>{error.description.message}</p>
                        :
                        null
                    }
                </div>
                <input type="submit" value="Update"/>
            </form>
        </div>
    )
}
export default Update;