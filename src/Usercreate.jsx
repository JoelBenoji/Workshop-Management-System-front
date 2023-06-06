import { useState } from "react";

export default function Usercreate(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [make, setMake] = useState('');
    const [model, setModel] = useState('');

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
    var data = {
        "name": name,
        "email": email,
        "make" :make,
        "model": model
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
            .then(response => console.log(response))
            // Displaying results to console
        
        }
            setSubmitted(true);
            setError(false);
        }

    const successMessage = () => {
        return (
            <div
                className="success"
                style={{
                    display: submitted ? '' : 'none',
                }}>
                <h1>User {name} successfully registered!!</h1>
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
                <h1>Please enter all the fields</h1>
            </div>
        );
    };
    return(
    <div className='container'>
          <form>
            <input onChange={handleName} value={name} type='text' placeholder='name'/>
            <input onChange={handleEmail} value={email} type='text' placeholder='email'/>
            <input onChange={handleMake} value={make} type='text' placeholder='make'/>
            <input onChange={handleModel} value={model} type='text' placeholder='model'/>

            <button onClick={handleSubmit} type="submit">Submit</button>
          </form>
          <div className="messages">
                {errorMessage()}
                {successMessage()}
          </div>
    </div>
    )
    
}
