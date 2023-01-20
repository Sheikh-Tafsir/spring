import React from 'react'
import {Routes, Route, Link, BrowserRouter, useNavigate} from "react-router-dom";
import Homepage from "./Homepage"
import Login from './Login';
import Signup from './Signup';
import Service from './Service';

const App = () => {
  return (
    <>
      <Homepage/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/signup' element={<Signup/>} />
          <Route path='/service' element={<Service/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App

