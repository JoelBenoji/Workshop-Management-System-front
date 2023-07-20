import { useLocation } from "react-router";
import { useNavigate } from "react-router";
import "./styles/dashboard.css";
export default function AdminDashboard() {
    const Location = useLocation();
    const navigate = useNavigate();

    const Name = Location.state.Name;

  //Log Out
  const nav = () => {
    navigate("/admin", { replace: true });
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
    </div>
  );
}
