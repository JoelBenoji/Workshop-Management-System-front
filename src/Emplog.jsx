import { useState } from "react";
import { useNavigate } from "react-router";
import './styles/login.css'
import logo from './Images/output.png'

export default function Emplog(){
    const [empid, setEmp] = useState();
    const [password, setPassword] = useState('');
    const [phone,setPhone] = useState('') 
    const [name,setName] = useState('')
    const [category,setCat] = useState('')

    const navigate = useNavigate();

    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);

    const home =()=>{
        navigate('/')
    }
    const handleEmail = (e) => {
        setEmp(parseInt(e.target.value));
        setSubmitted(false);
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
        setSubmitted(false);
    };
    var data = {
        "Empid": empid,
        "Password": password,
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (data.Empid === '' || data.Password === '') {
            setError(true);
        } 
        else {
            fetch("http://localhost:8080/emplogin", {
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
                setPhone(json.Phone)
                setName(json.Name)
                setCat(json.Category)
                if(json.Success === 'true'){
                    navigate('/emp/dashboard', {state: {
                        Name: json.Name,
                        Phone: json.Phone,
                        Category: json.Category,
                        Empid: empid
                    }})
                    setSubmitted(true);
                    setError(json.Success)
                }
                else{
                    setError(json.Success)
                    setSubmitted(false)
                }
            })
        }
        }

    return(
    <div className="container-login">
        <div className="headings">
        <div className='headings-text'>
            <img src={logo} className='logo-login' alt='logo' onClick={home}/>
            <h2>M . E . C . X</h2>
            <p>Staff Login</p>    
        </div>
        </div>
        <div className='login-card'>
            <div className="login-cred">
            <h1>Welcome</h1>
            <p className='desc'>Login to get started</p>
          <form>
            <input onChange={handleEmail} value={empid} type='text'className="textbox" placeholder='Employee ID'/><br></br>
            <input onChange={handlePassword} value={password} type='password' className='textbox' placeholder='Password'/><br></br>

            <div className="buttons">
                <button onClick={handleSubmit} type="submit">Submit</button>
            </div>
          </form>
          <div className="messages">
                {error}
          </div>
        </div>        
        </div>
    </div>
    )
    
}
