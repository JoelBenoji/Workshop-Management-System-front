import { useEffect, useState } from "react";
import { json, useNavigate } from "react-router";
import './styles/login.css'

export default function Usercreate(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const[success,setSuccess] = useState('')
    const [make,setMake] = useState('') 
    const [model,setModel] = useState('');
    const [name,setName] = useState('');
    const navigate = useNavigate();

    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);

    const handleEmail = (e) => {
        setEmail(e.target.value);
        setSubmitted(false);
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
        setSubmitted(false);
    };
    var data = {
        "email": email,
        "password": password,
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (data.email === '' || data.password === '') {
            setError(true);
        } 
        else {
            fetch("http://localhost:8080/", {
            method: "POST", 
            mode: "cors",
            // Adding headers to the request
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
            // Adding body or contents to send
            body: JSON.stringify(data)
            })
            // Converting to JSON
            .then(response =>response.json()).then((json) => {
                setSuccess(json.Success)
                setMake(json.Make)
                setModel(json.Model)
                setName(json.Name)
            })
            // Displaying results to console
            if(success === 'true'){
                setSubmitted(true);
                navigate("/dashboard",{state:{Name: name, Make:make, Model:model}})
            }
            else{
                setError(true)
                setSubmitted(false)
            }
        }
        }

    // Showing error message if error is true
    const errorMessage = () => {
        return (
            <div
                className="error"
                style={{
                    display: error ? '' : 'none',
                }}>
                <p>Invalid details, please try again</p>
            </div>
        );
    };
    return(
    <div className="container-login">
        <div className="headings">
        <div className='headings-text'>
            <h2>mec<span className="italic">X</span></h2>
            <p>The mechanical expert</p>    
        </div>
        </div>
        <div className='login-card'>
            <div className="login-cred">
            <h1>Welcome</h1>
            <p className='desc'>Login to get started</p>
          <form>
            <input onChange={handleEmail} value={email} type='text'className="textbox" placeholder='Username'/><br></br>
            <input onChange={handlePassword} value={password} type='password' className='textbox' placeholder='Password'/><br></br>

            <div className="buttons">
                <button onClick={handleSubmit} type="submit">Submit</button>
                <p><a href="/signup">Dont have an account? Click here to sign up</a></p>
            </div>
          </form>
          <div className="messages">
                {errorMessage()}
          </div>
        </div>        
        </div>
    </div>
    )
    
}
