import React, { useState,useEffect } from 'react';
import Axios from 'axios';
import { GoogleLogin} from 'react-google-login';
import { gapi } from 'gapi-script';

const Login = () => {
    const [ profile, setProfile ] = useState(null);
    const clientId = '1000835904597-ut38ah9s6238riqo9iv189fpcje1fc37.apps.googleusercontent.com';
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loginStatus, setLoginStatus] = useState("");

    
    let localStorageUsername=localStorage.getItem("localStorageUsername");
    let localStorageLoggedState=localStorage.getItem("localStorageLoggedState");
  
    const displayInfo = () => {
        console.log(username + password);
        alert(username + password);
    }

    const loginUser = () => {
        //alert(username);

        
        Axios.post('http://localhost:8080/login',{
            username:username,
            password:password
        }).then((response) =>{
            //alert(JSON.stringify(response.data));
            //setLoginStatus((response.data));
            //alert(response.data);
            if(response.data === 0){
                setLoginStatus("Wrong id or password");
            }
            else if(response.data === 1){
                //alert("hi");
                setLoginStatus("logging in");
                localStorage.setItem("localStorageUsername",username);
                localStorage.setItem("localStorageLoggedState",1);
                window.open("/service", "_top");
            }
        });
        //alert("succc");
        document.querySelector(".logfrm").reset();
    };

    useEffect(() => {
        const initClient = () => {
            gapi.client.init({
                clientId: clientId,
                scope: ''
            });
        };
        gapi.load('client:auth2', initClient);
        if(localStorageLoggedState==1)window.location.href = "/service";
    });

    const onSuccess = (res) => {
        setProfile(res.profileObj);
        localStorage.setItem("localStorageLoggedState",1);
        localStorage.setItem("localStorageUsername",res.profileObj.name);
        window.location.href = "/service";

    };

    const onFailure = (err) => {
        console.log('failed', err);
        localStorage.setItem("localStorageLoggedState",0);
        localStorage.setItem("localStorageUsername",null);
    };
  
  return (
    <div className="loginpage" >
        <form className="logfrm">
            <h2>Log In</h2>
            <label htmlFor="name">Email: </label><br/>
            <input type="text" id="name" name="name" placeholder="Insert Your Email" onChange={(event) => {setUsername(event.target.value);}}/><br/>
            <label htmlFor="pass">Password: </label><br/>
            <input type="password" id="pass" name="pass" placeholder="Insert Your Password" onChange={(event) => {setPassword(event.target.value);}}/><br/>
            <a href="/forgetpass" className="frgtps">Forgot password?</a>
            <a href="/admnlgn" className="log2admn">Login as admin</a>
            <p>{loginStatus}</p>
            <h3  className="logfrmbut" onClick={loginUser}>Login</h3><br/>
            <a href="/signup" id="log2reg">Don't Have an account? SignUp </a><br/>
        </form>   
    </div>
  )
}

export default Login