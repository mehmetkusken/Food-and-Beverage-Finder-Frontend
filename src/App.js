import React from 'react';
import { BrowserRouter } from "react-router-dom";
import  Router   from './router';
import Navbar from './components/navbar'



function App() {
  return (
    <BrowserRouter>
      <div className= "App"> 
        <Navbar/>
        <Router />
      </div>
    </BrowserRouter>
  );
}

export default App;
