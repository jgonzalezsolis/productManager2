import { useState } from 'react';
import React from 'react';
import ProductForm from './components/ProductForm'
import {BrowserRouter, Routes, Route} from 'react-router-dom' 
import DisplayAll from './components/DisplayAll';
import OneProduct from './components/OneProduct';
import Update from './components/UpdateForm';
import Nav from './components/Nav';
import './App.css'
import Main from './views/main';
import Form  from './components/form';

function App() {
  //essentials
  //components, 
  //import BrowserRouter routes Route from react-router-dom


  return (
    <BrowserRouter>
    <div className='APP'>
        <Nav/>
        <Routes>
          <Route index element={<DisplayAll/>}/>
          <Route path="/sellProduct" element={<Form/>} />
          <Route path='/product/:id' element={<OneProduct/>}/>
          <Route path="/product/edit/:id" element={<Update/>} />
        </Routes>
    </div>
    </BrowserRouter>
    
  )
}

export default App
