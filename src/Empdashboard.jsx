import { useLocation, useNavigate } from "react-router";
import './styles/dashboard.css'
import logo from "./Images/output.png";


export default function Empdashboard(){
    const Location = useLocation();
    const data = Location.state;
    const navigate = useNavigate();

    const nav=()=>{
        data = null;
        navigate('/emp/login')
    }

    if(data === null){
        setTimeout(()=>{
            navigate("/emp/login");
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
    }
    else{
        return(
            <div className="dashboard">
            <div className="heading">
                <h2>Welcome <span>{data.Name}</span></h2>
                <button onClick={nav}>Log Out</button>
            </div>
            <p>Phone no: {data.Phone}</p>
            </div>
        )
    }
}