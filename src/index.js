import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {createBrowserRouter, RouterProvider, Routes, Route, Link, BrowserRouter as Router,HashRouter, Switch, useNavigate, BrowserRouter} from "react-router-dom";
import Homepage from "./Homepage"
import Login from './Login';
import Signup from './Signup';
import Service from './Service';

const router = createBrowserRouter([
  {
    path:"/",
    element: <div><App/></div>,
  },
  {
    path:"/login",
    element: <div><Login/></div>,
  },
  {
    path:"/signup",
    element: <div><Signup/></div>,
  },
  {
    path:"/service",
    element: <div><Service/></div>,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
  
);


