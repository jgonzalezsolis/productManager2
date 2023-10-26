import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const ProductForm = (props) => {
    const {allProducts, setAllProducts}= props;
    const navigate = useNavigate()

    //keep track of what is being typed via useState hook
    const[product, setProduct] =useState({
        title:'',
        price: 0,
        description:''
    })
    // const [title,setTitle]= useState(""); 
    // const [price,setPrice]= useState(""); 
    // const [description,setDescription]= useState(""); 
    const handleChange = (e) => {
        setProduct({...product, [e.target.name]: e.target.value})
    }

    //handler when the form is submitted
    const onSubmitHandler = (e) => {
        //prevent default behavior of the submit
        e.preventDefault();
        //make a post request to create a new person
        axios.post('http://localhost:8000/api/products', product
        // {
            //     title: title,    // this is shortcut syntax for firstName: firstName,
            //     price: price,
            //     description: description      // this is shortcut syntax for lastName: lastName
            // } 
            )
            .then((res)=>{
                console.log(res); // always console log to get used to tracking your data!
                console.log(res.data);
                navigate("/")
                setAllProducts([...allProducts, res.data]);
                setTitle("");
                setPrice("");
                setDescription("")
            })
            .catch(err=>console.log(err))
    }
    return (
        <div>
        <h1>Product Manager</h1>
        <form onSubmit={onSubmitHandler}>
            <div>
                <label>Title:</label><br/>
                {/* When the user types in this input, our onChange synthetic event 
                    runs this arrow function, setting that event's target's (input) 
                value (what's typed into the input) to our updated state   */}
                <input type="text" name='title'  onChange = {handleChange}/>
            </div>
            <div>
                <label>Price:</label><br/>
                <input type="number" name='price'  onChange = {handleChange}/>
            </div>
            <div>
                <label>Description:</label><br/>
                <input type="text" name='description'  onChange = {handleChange}/>
            </div>
            <input type="submit" value="Create"/>
        </form>
        </div>
    )
}
export default ProductForm;