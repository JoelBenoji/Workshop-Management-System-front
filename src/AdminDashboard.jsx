import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { useNavigate } from "react-router";
import "./styles/dashboard.css";
export default function AdminDashboard() {
  const Location = useLocation();
  const navigate = useNavigate();

  const Name = Location.state.Name;
  const [emplist, setList] = useState([]);
  //Log Out
  const nav = () => {
    navigate("/admin", { replace: true });
  };

  useEffect(()=>{
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
  },[])

  return (
    <div className="dashboard">
      <div className="heading">
        <h2>
          Welcome,<br></br>
          <span>{Name}</span>
        </h2>
        <button onClick={nav}>Log Out</button>
      </div>
      <div className="card">
        <h3>Employee Status</h3>
        <table className="table">
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
      <div className="card">
        <h3>Inventory</h3>
      </div>
    </div>
  );
}
