import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

// import object yang diperlukan dari react-router-dom

import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'

// panggil semua halaman

import Login from './component/Login'
import Register from './component/Register'
import Home from './component/Home'
import Detail from './component/Detail'
import ListComponent from './component/ListComponent'
import Product from './component/Product'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />  
        <Route path="/register" element={<Register />} />      
        <Route path="/home" element={<Home />} />      
        <Route path="/Detail" element={<Detail />} />      
        <Route path="/ListComponent" element={<ListComponent />} />      
        <Route path="/ListProduct" element={<Product />} />          
      </Routes>
    </BrowserRouter>
);
}

export default App;
