import { useState } from "react";
import { json } from "react-router";

export default function Usercreate(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const[success,setSuccess] = useState('')
    const [make,setMake] = useState('') 
    const [model,setModel] = useState('');
    const [name,setName] = useState('');

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
        if (email === '' || password === '') {
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
            setSubmitted(true);
        }
        }

    const successMessage = () => {
        return (
            <div
                className="success"
                style={{
                    display: submitted ? '' : 'none',
                }}>
                <p>Welcome Back, {name}!</p>
                <p>
                    Car Make: {make}
                    Car Model: {model}
                </p>
            </div>
        );
    };

    // Showing error message if error is true
    const errorMessage = () => {
        return (
            <div
                className="error"
                style={{
                    display: error ? '' : 'none',
                }}>
                <p>Please enter all the fields</p>
            </div>
        );
    };
    return(
    <div className='container'>
        <h1>Welcome</h1>
          <form>
            <input onChange={handleEmail} value={email} type='text' placeholder='Email'/>
            <input onChange={handlePassword} value={password} type='text' placeholder='Password'/>

            <button onClick={handleSubmit} type="submit">Submit</button>
          </form>
          <div className="messages">
                {errorMessage()}
                {successMessage()}
          </div>
          <p><a href="/signup">Click here to sign up</a></p>
    </div>
    )
    
}
