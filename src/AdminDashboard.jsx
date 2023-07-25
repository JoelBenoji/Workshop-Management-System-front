import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { useNavigate } from "react-router";
import "./styles/dashboard.css";
export default function AdminDashboard() {
  const Location = useLocation();
  const navigate = useNavigate();

  const Name = Location.state.Name;
  const [emplist, setList] = useState([]);
  const [userlist, setuserList] = useState([]);
  const [emer, setEmer] = useState();
  const [location,setLocation] = useState('')

  //Log Out
  const nav = () => {
    navigate("/admin", { replace: true });
  };

  useEffect(() => {
    //Employee List
    fetch("http://localhost:8080/admin/emplist", {
      method: "get",
      mode: "cors",
      // Adding headers to the request
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        setList(json);
      });

    //User List
    fetch("http://localhost:8080/admin/userlist", {
      method: "get",
      mode: "cors",
      // Adding headers to the request
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        setuserList(json);
      });

    //Emergency
    fetch("http://localhost:8080/admin/emergency",{
      method: "get",
      mode: "cors",
      // Adding headers to the request
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then(
      response=>response.json()
    ).then(
      json=>{
        if(json !== null){
          setEmer(json)
        }
      }
    )
  }, []);

  const markfinish =()=>{
    fetch('http://localhost:8080/admin/emer/markfinish',{
      method: "post",
      mode: "cors",
      // Adding headers to the request
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      }
    })
    alert("Marked as Finished")
    window.location.reload(false)
  }
  const Locationbutton=()=>{
    if(emer.Latitude !== null){
      return(
        <a target='_blank' href={location}>
              <button className="emer-button">Show Location in Map</button>
            </a>
      )
    }
  }
  const Emergency = () => {
    if (emer !== undefined) {
      setLocation("https://www.google.com/maps/place/" + emer.Latitude + ',' + emer.Longitude)
      return (
        <div className="card emer">
          <h3>Emergency</h3>
          <p>
            <b>Name: </b>
            {emer.Name}{" "}
          </p>
          <p>
            <b>Phone: </b>
            {emer.Phone}{" "}
          </p>
          <p>
            <b>Description: </b>
            {emer.Description}{" "}
          </p>
          {Locationbutton()}
          <a target='_blank' href={'tel:' + emer.Phone}>
            <button className="emer-button">Call</button>
          </a>
            <button className="emer-button" onClick={markfinish}>Mark as Finished</button>
        </div>
      );
    }
  };

  return (
    <div className="dashboard">
      <div className="heading">
        <h2>
          Welcome,<br></br>
          <span>{Name}</span>
        </h2>
        <button onClick={nav}>Log Out</button>
      </div>
      <Emergency />
      <div className="card employees">
        <h3>Employees</h3>
        <table className="table-employees">
          <thead>
            <tr>
              <td>Empid</td>
              <td>Name</td>
              <td>Category</td>
              <td>Customer Name</td>
              <td>Customer Email</td>
              <td>Description</td>
              <td>Status</td>
            </tr>
          </thead>
          <tbody>
            {emplist.map((item) => {
              return (
                <tr>
                  <td>{item.Empid}</td>
                  <td>{item.Name}</td>
                  <td>{item.Category}</td>
                  <td>{item.CustomerName}</td>
                  <td>{item.CustomerEmail}</td>
                  <td>{item.Description}</td>
                  <td>{item.Status}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="card users">
        <h3>Users</h3>
        <div className="table-users">
          <table className="table-employees">
            <thead>
              <tr>
                <td>Name</td>
                <td>Email</td>
                <td>Make</td>
                <td>Model</td>
              </tr>
            </thead>
            <tbody>
              {userlist.map((item) => {
                return (
                  <tr>
                    <td>{item.Name}</td>
                    <td>{item.Email}</td>
                    <td>{item.Make}</td>
                    <td>{item.Model}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
