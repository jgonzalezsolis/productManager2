import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Form = () => {
    const [product, setProduct] = useState ({
        title: '',
        price: 0,
        description: ''
    })
    const navigate = useNavigate()
    const handleChange= (e)=>{
        setProduct({...product, [e.target.name]: e.target.value})
    }
    const [error, setError] = useState({})

    const handleSubmit = (e) => {
        //prevent default behavior of the submit
        e.preventDefault();
        //make a post request to create a new person
        axios.post('http://localhost:8000/api/products', product)
            .then((res)=>{
                console.log(res); // always console log to get used to tracking your data!
                console.log(res.data);
                navigate("/")
                // setProduct([...product, res.data]);
                // setTitle("");
                // setPrice("");
                // setDescription("")
        })
        .catch(err=>{
            console.log(err.response.data.error.errors)
            setError(err.response.data.error.errors)
            // navigate("/")
        })

    }
    
    
    return (
        <div>
        <h1>Add a Product</h1>
        <form onSubmit={handleSubmit} >
            <div>
                <label>Title:</label><br/>
                {/* When the user types in this input, our onChange synthetic event 
                    runs this arrow function, setting that event's target's (input) 
                value (what's typed into the input) to our updated state   */}
                <input type="text" name='title'  onChange={handleChange} />
                {
                    error.title ?
                    <p>{error.title.message}</p>
                    :
                    null
                }
            </div>
            <div>
                <label>Price:</label><br/>
                <input type="number" name='price' onChange={handleChange} />
                {
                    error.price ?
                    <p>{error.price.message}</p>
                    :
                    null
                }
            </div>
            <div>
                <label>Description:</label><br/>
                <input type="text" name='description'  onChange={handleChange}/>
                {
                    error.description ?
                    <p>{error.description.message}</p>
                    :
                    null
                }
            </div>
            <input type="submit" value="Create"/>
        </form>
        </div>
    )
}
export default Form;