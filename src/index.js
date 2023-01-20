import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {Routes, Route, Link, BrowserRouter as Router,HashRouter, Switch, useNavigate} from "react-router-dom";
import Homepage from "./Homepage"
import Login from './Login';
import Signup from './Signup';
import Service from './Service';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
        <Routes>
          <Route path='/' element={<Homepage/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/signup' element={<Signup/>} />
          <Route path='/service' element={<Service/>} />
        </Routes>
      </Router>
  </React.StrictMode>
);


