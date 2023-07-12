import { useLocation, useNavigate } from "react-router";
import "./styles/dashboard.css";
import logo from "./Images/output.png";
import { useState,useEffect } from "react";

export default function Empdashboard() {
  const Location = useLocation();
  const data = Location.state;
  const navigate = useNavigate();

  const [list, setList] = useState([]);

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
      console.log(json)
      setList(json)
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
  if (data === null) {
    setTimeout(() => {
      navigate("/emp/login");
    }, 2000);
    return (
      <>
        <div className="dashboard-error">
          <div className="container-error">
            <div className="img">
              <img src={logo} />
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
          </div>
          <div className="card appointments">
            <h3>View Appointments</h3>
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
                        <td>{item.Status}
                        <button className='accept' onClick={()=>handleAccept(index)}>Accept</button>
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
      </div>
    );
  }
}
