import { useLocation, useNavigate } from "react-router";
import "./styles/dashboard.css";
import logo from "./Images/output.png";

export default function Empdashboard() {
  const Location = useLocation();
  const data = Location.state;
  const navigate = useNavigate();

  const nav = () => {
    navigate("/emp/login");
  };

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
          <div className="card cardeets">
          <h3>Information</h3>
          <p><b>Phone no:</b> {data.Phone}</p>
          <p><b>Category:</b> {data.Category}</p>
          </div>
          <div className="card appointments">
            <h3>View Appointments</h3>
            <ul>List of User Appointments</ul>
            <li>Item 1</li>
            <li>Item 1</li>
            <li>Item 1</li>
            <li>Item 1</li>
            <li>Item 1</li>
            <li>Item 1</li>
            <li>Item 1</li>
          </div>
        </div>
      </div>
    );
  }
}
