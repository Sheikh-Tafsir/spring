import {React, useState} from 'react';
import Axios from 'axios';
import GoogleLogin from 'react-google-login';

const Homepage = () => {
    const [username, setUsername] = useState("");
    const getEmployee = () => {
        
        Axios.get('http://localhost:8080/hello',{
        }).then((response) =>{
            alert(response.data);
        })
    }

    const setEmployee = () => {
        alert(username);
        Axios.post('http://localhost:8080/nothello',{
            body:username
        }).then((response) =>{
            alert(response.data);
        })
    }
  return (
    <>
        <p><a href="/hello">Greet the world!</a></p>

        <form action="/" method="" id="nameForm">
            <div>
                <label for="nameField">How should the app call you?</label>
                <input name="myName" id="nameField" onChange={(event) => {setUsername(event.target.value);}}/>
                <button onClick={getEmployee}>Greet me!</button>
                <button onClick={setEmployee}>set me!</button>
            </div>
        </form>
    </>
  )
}

export default Homepage