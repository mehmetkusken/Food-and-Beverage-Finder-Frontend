import React, {useState} from 'react';
import loginImg from "../assets/images/login.jpeg";
import { submitLogin } from '../redux/actionCreators';
import { connect } from 'react-redux' ;
import { useNavigate } from 'react-router-dom';


export function Login(props){
  
   const [username, setUsername] = useState("");
   const [password, setPassword] = useState("");
   const [error, setError] = useState({
       username: "",
       password: ""
   });
   const navigate = useNavigate()
  

   const startLoginProccess = () => {
        if (!validateLoginForm()) {
            props.submitLogin({username, password})
            navigate("/")
        }
   }

   const validateLoginForm = () => {
       let hasError = false;
       let newError = { 
            username : "",
            password : ""
       }
        if (username.length <= 0) {
            newError.username = "Username can not be empty";
            hasError = true;
        }
        if (password.length <= 0) {
            newError.password = "Password can not be empty";
            hasError = true;
        }

        setError(newError);
        return hasError;
    }

    return <div className="base-container">
    <div className="header">Login</div>
        <div className="content">
            <div className="image">
                <img src={loginImg}/>
            </div>
            <div className="form">
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username"  onInput={(event) => setUsername(event.target.value)} placeholder="username"/>
                    {error.username.length > 0 ? <div>{error.username}</div> : null}
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" onInput={(event) => setPassword(event.target.value)} placeholder="password"/>
                    {error.password.length > 0 ? <div>{error.password}</div> : null}
                </div>
            </div>
        </div>
        <div className="footer">
            <button type="button" className="btn" onClick={startLoginProccess} >Login</button>
        </div>
    </div>
    
}



export default connect(null, { submitLogin })(Login);