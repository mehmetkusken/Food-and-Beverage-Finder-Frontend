import React from 'react';
import { connect } from 'react-redux'
import { logout } from '../redux/actionCreators'
import './../assets/styles/Style.scss';
import { Link, useNavigate } from 'react-router-dom';
export { Login } from '../pages/Login';
export { Signup } from '../pages/Signup';



const Navbar = ({logout, username }) => {
    const navigate = useNavigate();

    const logoutProccess = () => {
        logout();
        navigate('/');
    }

    const loggedInRender =  () => 
        <nav className='ui raised very padded segment' style={{margin: "0"}}>
            <a className='ui teal inverted segment'>F & B  Finder</a>
            <div className='ui right floated header'>
                
                <Link  className='ui button' to='/'> Home </Link>
                <Link className='ui button' to='/finder'> F&B Finder </Link>
                <Link className='ui button' to='/profile'> Profile </Link>
                <button className='ui button' onClick={logoutProccess}> Logout </button>
                
       
                
            </div>
        </nav> 
    

    const loggedOutRender = () => 
        <nav className='ui raised very padded segment' style={{margin: "0"}}>
            <a className='ui teal inverted segment'>F & B  Finder</a>
            <div className='ui right floated header'>
                
                <Link className='ui button' to='/'>Home</Link>
        
                <Link className='ui button' to='/login'>Login</Link>
               
                <Link className='ui button' to='/signup'>Signup</Link>
                
            </div>
        </nav> 
        return username ? loggedInRender() : loggedOutRender()
    
}
const mapStateToProps = (state) => ({username: state.user.username})





export default connect(mapStateToProps, { logout })(Navbar);