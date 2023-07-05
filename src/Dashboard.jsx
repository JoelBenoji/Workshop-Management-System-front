import { useLocation } from "react-router";
import { useNavigate } from "react-router";
import "./styles/dashboard.css";
import logo from "./Images/output.png";

export default function Dashboard() {
  const Location = useLocation();
  const navigate = useNavigate();
  var log = Location.state;

  const nav = () => {
    log = null;
    navigate("/user/login");
  };

  if (log == null) {
    setTimeout(()=>{
      navigate("/user/login");
    },2000)
    return(
      <>
      <div className="dashboard-error">
      <div className="container-error">
        <div className="img">
          <img src={logo} />
        </div>
        <p>mecX</p>
        <h2>OOPS</h2>
        <p>Looks like you tried to access your dashboard without Logging in</p>
        <p>Taking you back to login....</p>
      </div>
      </div>
      </>
    )
  } else {
    return (
      <div className="dashboard">
        <div className="heading">
          <h2>
            Welcome,<span> {log.Name}</span>
          </h2>
          <button onClick={nav}>Log Out</button>
        </div>
        <div className="cards">
          <div className="card cardeets">
            <h3>Your Car</h3>
            <p>
              <b>Make</b>: {log.Make}
            </p>
            <p>
              <b>Model</b>: {log.Model}
            </p>
          </div>
          <div className="card appoinments">
            <h3>Your Appointments</h3>
            <p>Coming soon</p>
          </div>
        </div>
      </div>
    );
  }
}
