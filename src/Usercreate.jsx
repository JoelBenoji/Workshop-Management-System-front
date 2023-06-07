import { useState } from "react";

export default function Usercreate(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [make, setMake] = useState('');
    const [model, setModel] = useState('');
    const [password, setPassword] = useState('');

    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);

    const handleName = (e) => {
        setName(e.target.value);
        setSubmitted(false);
    }
    const handleEmail = (e) => {
        setEmail(e.target.value);
        setSubmitted(false);
    }
    const handleMake = (e) => {
        setMake(e.target.value);
        setSubmitted(false);
    };
    const handleModel = (e) => {
        setModel(e.target.value);
        setSubmitted(false);
    };
    const handlePassword = (e) => {
        setPassword(e.target.value);
        setSubmitted(false);
    };
    var data = {
        "name": name,
        "email": email,
        "password": password,
        "make" : make.charAt(0).toUpperCase()+ make.slice(1),
        "model": model.charAt(0).toUpperCase() + model.slice(1)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (name === '' || email === '') {
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
            .then(response => {
                if(response.status === 200){
                    setError(false)
                }
                else{
                    setError(true);
                }
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
                <p>User {name} successfully registered!!</p>
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
        <h1>Sign Up</h1>
          <form>
            <input onChange={handleName} value={name} type='text' placeholder='Name'/>
            <input onChange={handleEmail} value={email} type='text' placeholder='Email'/>
            <input onChange={handlePassword} value={password} type='text' placeholder='Password'/>
            <input onChange={handleMake} value={make} type='text' placeholder='Make'/>
            <input onChange={handleModel} value={model} type='text' placeholder='Model'/>

            <button onClick={handleSubmit} type="submit">Submit</button>
          </form>
          <div className="messages">
                {errorMessage()}
                {successMessage()}
          </div>
    </div>
    )
    
}
