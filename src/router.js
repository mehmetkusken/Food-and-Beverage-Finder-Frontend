import {
    Routes,
    Route,
  } from "react-router-dom";
  import React, { useEffect } from 'react';
import Home from './pages/Home';
import { Finder } from './pages/Finder';
import Login from './pages/Login';
import Logout from './pages/Logout';
import Profile from './pages/Profile';
import Signup from './pages/Signup';
import { connect } from "react-redux";
import { autoLogin} from './redux/actionCreators'

function Router({user, autoLogin}) {
    useEffect(() => localStorage.token && autoLogin(), [autoLogin])

   
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

const mapStateToProps = (state) => ({user: state.user})
export default connect(mapStateToProps, { autoLogin})(Router);