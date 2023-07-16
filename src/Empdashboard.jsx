import { useLocation, useNavigate } from "react-router";
import "./styles/dashboard.css";
import logo from "./Images/output.png";
import { useState,useEffect } from "react";

export default function Empdashboard() {
  const Location = useLocation();
  const data = Location.state;
  const navigate = useNavigate();

  const [list, setList] = useState([]);
  const [joblist, setJoblist] = useState([]);

  const nav = () => {
    setList([])
    navigate("/emp/login", {replace: true});
  };

  //Get Appointment List
  useEffect(()=>{
    fetch('http://localhost:8080/emp/dashboard/' + data.Category,{
    method: "GET", 
            mode: "cors",
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
  }).then(
    response=>(response.json())
  ).then(
    json=>{
      setList(json)
    }
  )
    fetch('http://localhost:8080/emp/dashboard/joblist',{
      method: "POST", 
      mode: "cors",
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      },
    body: JSON.stringify({
      Empid: data.Empid
    })
  }).then(
      response=>response.json()
    ).then(
      json=>{
        setJoblist(json)
      }
    )
    },[])
  
  //Accept Function
  const handleAccept=async(index)=>{
    var data = {
      id: list[index]._id,
      Status : 'accepted',
      Empid: Location.state.Empid
    }
    await fetch("http://localhost:8080/emp/dashboard", {
            method: "POST", 
            mode: "cors",
            // Adding headers to the request
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
            // Adding body or contents to send
            body: JSON.stringify(data)
    })
  }

  //Take A Job
  const startwork=()=>{
    alert("Work Picked")
  }

  if (data === null) {
    setTimeout(() => {
      navigate("/emp/login");
    }, 2000);
    return (
      <>
        <div className="dashboard-error">
          <div className="container-error">
            <div className="img">
              <img src={logo} alt="logo"/>
            </div>
            <p className="mecx">M . E . C . X</p>
            <h2>OOPS</h2>
            <p>
              Looks like you tried to access your dashboard without Logging in
            </p>
            <p>Taking you back to login....</p>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <div className="dashboard">
        <div className="heading">
          <h2>
            Welcome <br></br>
            <span>{data.Name}</span>
          </h2>
          <button onClick={nav}>Log Out</button>
        </div>
        <div className="cards">
          <div className="card cardeets emp">
          <h3>Information</h3>
          <p><b>Phone no:</b> {data.Phone}</p>
          <p><b>Category:</b> {data.Category}</p>
          <p><b>Total Jobs: </b></p>
          <p><b>Rating: </b></p>
          </div>
          <div className="card appointments">
            <h3>Get Jobs</h3>
            <p>View A List of User Appointments</p>
            <div className="table">
            <table className = 'table-emp'>
              <thead>
                <td>Date</td>
                <td>Make</td>
                <td>Model</td>
                <td>Description</td>
                <td>Action</td>
              </thead>
              <tbody>
                {(
                  list.map((item,index)=>{
                    return(
                      <tr>
                        <td>{item.Date}</td>
                        <td>{item.Make}</td>
                        <td>{item.Model}</td>
                        <td>{item.Description}</td>
                        <td>
                        <button className='accept' onClick={()=>handleAccept(index)}>Take this Job</button>
                        </td>
                      </tr>
                    )
                  })
                )}
              </tbody>
            </table>
            </div>
          </div>
        </div>
        <div className="card joblist">
            <h3>Your Jobs</h3>
            <p>View your accepted Jobs</p>
            <table className="table-joblist">
              <thead>
                <tr>
                  <td>Date</td>
                  <td>Customer Name</td>
                  <td>Make</td>
                  <td>Model</td>
                  <td>Descrption</td>
                  <td>
                    Action
                  </td>
                </tr>
              </thead>
              <tbody>
              {(
                  joblist.map((item)=>{
                    return(
                      <tr>
                        <td>{item.Date}</td>
                        <td>{item.Name}</td>
                        <td>{item.Make}</td>
                        <td>{item.Model}</td>
                        <td>{item.Description}</td>
                        <td>
                          <button className="joblist-button" onClick={startwork}>Start Work</button>
                        </td>
                      </tr>
                    )
                  })
                )}
              </tbody>
            </table>
          </div>
          <div className="card">
            <h3>Current Job</h3>
            <p><b>Name: </b>Arjun</p>
            <p><b>Make: </b>Toyota</p>
            <p><b>Model: </b>Corolla</p>
            <p><b>Total Cost: </b><input type="text"/></p>
            <button>Mark As Finished</button>
          </div>
      </div>
    );
  }
}
