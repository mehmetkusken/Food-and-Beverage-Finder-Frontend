import React, { useEffect } from 'react';
import { BrowserRouter } from "react-router-dom";
import  Router   from './router';
import Navbar from './components/navbar'
import { connect } from "react-redux";
import { autoLogin} from './redux/actionCreators'




function App({autoLogin}) {
  
  useEffect(() => localStorage.token && autoLogin(), [autoLogin])
  

  return (
    <BrowserRouter>
      <div className= "App"> 
        <Navbar/>
        <Router />
      </div>
    </BrowserRouter>
  );
}

const mapStateToProps = (state) => ({user: state.user})

export default connect(mapStateToProps, { autoLogin})(App);