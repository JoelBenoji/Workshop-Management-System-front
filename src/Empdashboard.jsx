import { useLocation, useNavigate } from "react-router";
import './styles/dashboard.css'

export default function Empdashboard(){
    const Location = useLocation();
    const data = Location.state;
    const navigate = useNavigate();

    const nav=()=>{
        navigate('/emp/login')
    }

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