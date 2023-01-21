import React, { Component } from 'react'
import {createBrowserRouter, RouterProvider,Routes, Route, Link, BrowserRouter,Router,HashRouter, Switch, useNavigate} from "react-router-dom";
import Homepage from "./Homepage"
import Login from './Login';
import Signup from './Signup';
import Service from './Service';
import Notfound from './Notfound' 

const router = createBrowserRouter([
  {
    path:"/",
    exact:true,
    element: <div><Homepage/></div>,
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
  },
  {
    path:"/*",
    element: <div><Notfound/></div>,
  }
]);

const App = () => {
  return (
    <> 
      <p>hi</p>
      <RouterProvider 
        router={router}
        /*fallbackElement={<BigSpinner/>}*/
      />
    </>
  )
}
export default App

