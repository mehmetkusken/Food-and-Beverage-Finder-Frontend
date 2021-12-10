import React, {useState} from 'react';
import loginImg from "../assets/images/login.jpeg";
import { submitSignup } from '../redux/actionCreators';
import { connect } from 'react-redux' ;
import { useNavigate } from 'react-router-dom';



export function Signup(props){
    
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [zipcode, setZipcode] = useState("");
    const [error, setError] = useState({
       username: "",
       password: "",
       zipcode : "",
       email: ""
    });
    const navigate = useNavigate()

    

    const startSignupProccess = () => {
        
        if (!validateSignupForm()) {
           props.submitSignup({ username, password, email, zipcode})
           navigate("/")

        }
   }

   const validateSignupForm = (event) => {
  
       let hasError = false;
       let newError = { 
            username : "",
            password : "",
            zipcode : "",
            email: ""
       }
        if (username.length <= 0 )  {
            newError.username = "Username can not be empty";
            hasError = true;
        }
        if (password.length <= 0) {
            newError.password = "Password can not be empty";
            hasError = true;
        }
        if (email.length <= 0) {
            newError.email = "Email can not be empty";
            hasError = true;
        }
        if (zipcode.length <= 0) {
            newError.zipcode = "Email can not be empty";
            hasError = true;
        }

        setError(newError);

        return hasError;
    }
    
        return <div className="base-container" >
        <div className="header">Signup</div>
            <div className="content">
                <div className="image">
                    <img src={loginImg}/>
                </div>
                <div className="form">
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input value={username} type="text" name="username" onInput={(event) => setUsername(event.target.value)} placeholder="username"/>
                        {error.username.length > 0 ? <div>{error.username}</div> : null}
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" value={email} name="email" onInput={(event) => setEmail(event.target.value)} placeholder="email"/>
                        {error.password.length > 0 ? <div>{error.email}</div> : null}
                    </div>
                    <div className="form-group">
                        <label htmlFor="zipcode">Zipcode</label>
                        <input value={zipcode} type="text" name="zipcode"  onInput={(event) => setZipcode(event.target.value)} placeholder="zipcode"/>
                        {error.zipcode.length > 0 ? <div>{error.zipcode}</div> : null}
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" value={password} onInput={(event) => setPassword(event.target.value)} placeholder="password"/>
                        {error.password.length > 0 ? <div>{error.password}</div> : null}
                    </div>
                </div>
            </div>
            <div className="footer">
                <button type="button" className="btn" onClick={startSignupProccess}>Signup</button>
            </div>
        </div>
    
}



export default connect(null, { submitSignup })(Signup);


// connect lets us do 2 things - read from the store - and make changes to the data in the store

// reading from the store requires mapStateToProps (1st arg)

// making changes to the data requires mapDispatchToProps (2nd arg)

// meaning of dispatch: get an action (object with a type and optionally a payload) usually by calling an action creator function
// then the reducer function is called, and that action (along with current state) is passed into the reducer, which returns a new state (replaces old state)
// components subscribed to the store with mapStateToProps will rerender with that new state


// dispatch comes from connect, which is from the react-redux library
// we pass something in as the mapDispatchToProps arg in order to get a function that can dispatch different types of actions
