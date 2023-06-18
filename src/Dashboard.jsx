import { useLocation } from "react-router"
import { useNavigate } from "react-router"
import './styles/dashboard.css'

export default function Dashboard(){
    const Location = useLocation()
    const navigate = useNavigate()
    const log = Location.state
    
    const nav=()=>{
        navigate('/user/login')
    }
    
    if(log==null){
        navigate('/user/login')
    }
    else{
        return(
            <div className="dashboard">
                <div className="heading">
                    <h2>Welcome,<span> {log.Name}</span></h2>
                    <button onClick={nav}>Log Out</button>
                </div>
                <div className="cards">
                <div className="card cardeets">
                    <h3>Your Car</h3>
                <p><b>Make</b>:     {log.Make}</p>
                <p><b>Model</b>:   {log.Model}</p>
                </div>
                <div className="card appoinments">
                    <h3>Your Appointments</h3>
                    <p>Coming soon</p>
                </div>
                </div>
            </div>
        )
    }
    }