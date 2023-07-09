import React from 'react'
import Navbar from './Navbar'
import { Routes, Route } from "react-router-dom";
import Home from "./../views/Home";
import Search from '../views/Search';
import Collection from '../views/Collection';

function Content() {
  return (
    <main className='flex-auto'>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} component={Home}></Route>
          <Route path="/search" element={<Search/>} component={Search}></Route>
          <Route path="/collection" element={<Collection/>} component={Collection}></Route>
        </Routes>
        </main>
  )
}

export default Content