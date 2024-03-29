import { useEffect, useState } from "react";
import './styles/signup.css'
import { useNavigate } from "react-router";

export default function Usercreate(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [emailflag, setEmailflag] = useState();
    const [make, setMake] = useState('');
    const [model, setModel] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [makes, setMakes] = useState([]);
    const [models, setModels] = useState([]);
    const [selected, setSelected] = useState(makes[0]);
    const [selectmodel, setSelectmodel] = useState(models[0]);

    const navigate = useNavigate();

    //Handles
    useEffect(()=>{
        fetch('http://localhost:8080/signup/make', {
        method:"get",
        mode: "cors",
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    }).then(
        response=>(response.json())
    ).then(
        json=>{
            if(json.Makes!== []){
                setMakes(json.Makes);
            }
        }
    )
    },[])



    const handleName = (e) => {
        setName(e.target.value);
    }
    const handleEmail = (e) => {
        setEmail(e.target.value);
    }
    const handleMake = (e) => {
        setMake(e.target.value);
        setSelected(e.target.value);

        fetch("http://localhost:8080/signup/model",{
            method:'post',
            mode:'cors',
            headers:{
                "Content-type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify({
                Make: e.target.value
            })
        }).then(
            response=>response.json()
        ).then(json => {
            setModels(json.Models)
        })
    };

    console.log(models);

    const handleModel = (e) => {
        setModel(e.target.value);
        setSelectmodel(e.target.value)
    };
    const handlePassword = (e) => {
        setPassword(e.target.value);
    };
    var data = {
        "name": name.charAt(0).toUpperCase() + name.slice(1),
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
            fetch("http://localhost:8080/signup", {
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
            .then((response)=>response.json()).then((json)=>{
                console.log(json.Status)
                if(json.Status === 'Success'){
                    setError('Successfully Registered');
                    navigate('/user/login')
                }
                else{
                    setError(json.Status)
                }
            })
            // Displaying results to console
        }
        }
    // Showing error message if error is true
    const errorMessage = () => {
            return (
                <div>
                    {error}
                </div>
            );
    };

    return(
    <div className='container-signup'>
        <div className="signup-card">
        <h1>Sign Up</h1>
        <p>Fill in the form to create an account.</p>
          <form>
            <input onChange={handleName} value={name} type='text' placeholder='Name'/><br></br>
            <input onChange={handleEmail} value={email} type='email' placeholder='Email'/><br></br>
            <input onChange={handlePassword} value={password} type='text' min='6' placeholder='Password'/><br></br>
            <div className="select">
            <select value={selected} onChange={handleMake}>
              {makes.map((item) => {
                  return (<option>{item}</option>);
              })}
            </select>
            <select value={selectmodel} onChange={handleModel}>
              {models.map((item) => {
                  return (<option className="option">{item}</option>);
              })}
            </select>
            </div>

            <button onClick={handleSubmit} type="submit">Submit</button><br></br>
            <a href="user/login">Back to Log In</a>
          </form>
          <div className="messages">
                {errorMessage()}
          </div>
        </div>
    </div>
    )
    
}
