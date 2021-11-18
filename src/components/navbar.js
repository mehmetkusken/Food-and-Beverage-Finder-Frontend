import React from 'react';
import './../assets/styles/Style.scss';
import { Link } from 'react-router-dom';
export { Login } from '../pages/Login';
export { Signup } from '../pages/Signup';


const Navbar = () => {
    return(
        
        <nav className='ui raised very padded segment' style={{margin: "0"}}>
            <a className='ui teal inverted segment'>F & B  Finder</a>
            <div className='ui right floated header'>
                
                <Link className='ui button' to='/'>Home</Link>
                <Link className='ui button' to='/finder'>F&B Finder</Link>
                <Link className='ui button' to='/login'>Login</Link>
                <Link className='ui button' to='/logout'>Logout</Link>
                <Link className='ui button' to='/profile'>Profile</Link>
                <Link className='ui button' to='/signup'>Signup</Link>
                
            </div>
        </nav> 
    );
}






export default Navbar;