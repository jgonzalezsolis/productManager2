import React, { useEffect, useState } from 'react'
import ProductForm from '../components/ProductForm'
import DisplayAll from '../components/DisplayAll'



const Main = (props) => {

    const [allProducts, setAllProducts] = useState([]);

    // const removeFromDom = productId => {
    //     setAllProducts(allProducts.filter(product => product._id != productId)); //We could also write this in our PersonList component
    // }

    return (
    <div>
        <ProductForm allProducts={allProducts} setAllProducts={setAllProducts}/>
        <DisplayAll allProducts={allProducts} setAllProducts={setAllProducts} />
    </div>
    )
}

export default Main