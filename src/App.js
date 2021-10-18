import React from 'react'
import "./index.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Component/Navbar'
import { Route,path } from "react-router-dom"
import Home from "./Component/Home"



function App() {
  return (
    <>
      <Navbar />
  
      
      <Route exact path="/">
        <Home />
      </Route>

    </>
  )
}

export default App
