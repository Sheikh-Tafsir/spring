import React from 'react'
import {Routes, Route, Link, BrowserRouter, HashRouter, Switch, useNavigate} from "react-router-dom";
import Homepage from "./Homepage"
import Login from './Login';
import Signup from './Signup';
import Service from './Service';

const App = () => {
  return (
    <>
      <Homepage/>
      <HashRouter>
        <Routes>
          <Route path='/' element={<Homepage/>} exact />
          <Route path='/login' element={<Login/>} exact />
          <Route path='/signup' element={<Signup/>} exact />
          <Route path='/service' element={<Service/>} exact />
        </Routes>
      </HashRouter>
    </>
  )
}
export default App

