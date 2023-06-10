import { useLocation } from "react-router"
import { useNavigate } from "react-router"
export default function Dashboard(){
    const Location = useLocation()
    const navigate = useNavigate()
    console.log(Location.state)
    const log = Location.state
    return(
        <>
        <h1>Dashboard</h1>
        <h2>Welcome, {log.Name}</h2>
        <p>Make: {log.Make}<br></br>Model: {log.Model}</p>
        </>
    )
}