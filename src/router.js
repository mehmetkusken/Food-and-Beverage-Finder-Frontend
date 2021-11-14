import {
    Routes,
    Route,
  } from "react-router-dom";
import Home from './pages/Home';
import { Finder } from './pages/Finder';
import Login from './pages/Login';
import Logout from './pages/Logout';
import Profile from './pages/Profile';
import Signup from './pages/Signup';

function Router() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/finder' element={<Finder />} />
            <Route path='/login' element={<Login />} />
            <Route path='/logout' element={<Logout />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/signup' element={<Signup />} />
        </Routes>
    );
}
export { Router }