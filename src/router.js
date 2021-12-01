import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Finder from './pages/Finder';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Signup from './pages/Signup';
import {connect} from 'react-redux';
import { useEffect, useState } from "react";
import FourOFour from "./pages/FourOFour";




function Router(props) {
    const [isAuth, setIsAuth] = useState(false);

    useEffect(() => {
        if (props.username && props.username.length > 0) {
            setIsAuth(true);
        } else {
            setIsAuth(false);
        }
    }, [props.username])
    return ( 
        <Routes>
            <Route path='/' element={<Home />} />
            {isAuth ? <>
                <Route path='/finder' element={<Finder />} />
                <Route path='/profile' element={<Profile />} />
            </> : <>
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<Signup />} />
            </>}
            <Route path="*" element={<FourOFour />} />
            
        </Routes>
    );
}


const mapStateToProps = (state) => ({username: state.user.username})

export default connect(mapStateToProps)(Router);