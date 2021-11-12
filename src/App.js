import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Navbar from './components/navbar'
import Home from './pages/Home';
import Finder from './pages/Finder';
import Login from './pages/Login';
import Logout from './pages/Logout';
import Profile from './pages/Profile';
import Signup from './pages/Signup';


function App() {
  return (
    <BrowserRouter>
    <div className= "App"> 
    <Navbar/>
    <Routes>
    <Route path='/' element={<Home />} />
      <Route path='/finder' element={<Finder />} />
      <Route path='/login' element={<Login />} />
      <Route path='/logout' element={<Logout />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/signup' element={<Signup />} />
    </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
