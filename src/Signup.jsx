import {React,useEffect,useState} from 'react'
import Axios from 'axios';
import { GoogleLogin} from 'react-google-login';
import { gapi } from 'gapi-script';

const Signup = () => {
    const [ profile, setProfile ] = useState(null);
    //const [ loggedinStat, setLoggedinStat ] = useState();
    const clientId = '1000835904597-ut38ah9s6238riqo9iv189fpcje1fc37.apps.googleusercontent.com';
    let localStorageUsername=localStorage.getItem("localStorageUsername");
    let localStorageLoggedState=localStorage.getItem("localStorageLoggedState");
    
    const [usernamereg, setUsernamereg] = useState("");
    const [passwordreg, setPasswordreg] = useState("");
    
    const [useridreg,setUseridreg]=  useState("");
    const [regStatus, setRegStatus] = useState("");
    const options = ["CSE", "EEE", "MCE"];
    const [deptmntreg, setDeptmntreg] = useState(options[0]);

    const signupUser = () => {
            Axios.post('http://localhost:8080/signup',{
                username:usernamereg,
                password:passwordreg
            }).then((response) =>{
                if(response.data===0){
                    setRegStatus("user already exists");
                }
                else if(response.data === 1){
                    setRegStatus("user data saved");
                    localStorage.setItem("localStorageUsername",usernamereg);
                    localStorage.setItem("localStorageLoggedState",1);
                    window.location.href = "service";
                }
            });

        document.querySelector(".signfrm").reset();
        //alert("succ");
    };
    const ValidateEmail = (usernamereg) => {

        const last14 = usernamereg.slice(-14);
        if(last14==="@iut-dhaka.edu")return true;
        else return false;
    }
    
    
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

    const logOut = () => {
        setProfile(null);
        localStorage.setItem("localStorageLoggedState",0);
        localStorage.setItem("localStorageUsername",null);
        
    };


  return (
    <div className="signup">
            <form className="signupform">
                <h2>Sign Up</h2>
                <label htmlFor="name">Email ID: </label><br/>
                <input type="text" id="name" name="name" placeholder="Insert name" onChange={(event) => {setUsernamereg(event.target.value);} }/><br/>
                <label htmlFor="iid">Stud ID: </label><br/>
                <input type="password" id="iid" name="iid" placeholder="Insert Your password" onChange={(event) => {setPasswordreg(event.target.value);} }/><br/>
                <label htmlFor="iid"> Department: </label><br/>
                <select name="cars" id="deptmnt" onChange={(event) => setDeptmntreg(event.target.value)} defaultValue={deptmntreg}>
                    {options.map((option, idx) => (
                        <option key={idx}>{option}</option>
                    ))}
                </select>
                
                <p>{regStatus}</p>
                <h3 className="signfrmbut" onClick={signupUser} type="submit">SignUp</h3>
                <a href='/login'>Already Have an account?</a>
            </form>

            <GoogleLogin
                    clientId={clientId}
                    buttonText="Sign in with Google"
                    onSuccess={onSuccess}
                    onFailure={onFailure}
                    cookiePolicy={'single_host_origin'}
                    isSignedIn={true}
                />
        </div>
  )
}

export default Signup