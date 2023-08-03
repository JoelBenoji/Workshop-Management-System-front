import { useLocation } from "react-router";
import { useNavigate } from "react-router";
import "./styles/dashboard.css";
import logo from "./Images/output.png";
import { useState, useEffect } from "react";

export default function Dashboard() {
  //Appointment Form States
  const [category, setCategory] = useState("");
  const [date, setDate] = useState();
  const [desc, setDesc] = useState();
  const [list, setList] = useState([]);
  const [value,setValue] = useState();

  //Appointment Table Setter
  const Location = useLocation();
  const navigate = useNavigate();

  const Name = Location.state.Name;
  const [Make, setMake] = useState(Location.state.Make);
  const [Model, setModel] = useState(Location.state.Model);
  const [Email, setEmail] = useState(Location.state.Email);

    //Get Appointment List
    useEffect(() => {
      fetch("http://localhost:8080/user/dashboard", {
        method: "post",
        mode: "cors",
        // Adding headers to the request
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify({
          email: Location.state.Email
        })
      })
        .then((response) => response.json())
        .then((json) => {
            setList(json);
            setValue(list.length - 1)
        });
    },[value]);
  //Appointment Set Date Constraints
  var datenow = new Date();
  var currentdate = datenow.toISOString().slice(0, 10).replace(/-/g, "");
  var mindate =
    currentdate.slice(0, 4) +
    "-" +
    currentdate.slice(4, 6) +
    "-" +
    currentdate.slice(6, 8);

  //Log Out  
  const nav = () => {
    navigate("/user/login", { replace: true });
  };

  //Payment Function
  const payment=()=>{
    if(list[value].Amount === undefined){
      alert('Please pay after the job is finished')
    }
    else{
      fetch('http://localhost:8080/user/dashboard/payment',{
      method: "post",
        mode: "cors",
        // Adding headers to the request
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify({
          'Status' : 'Paid',
          'id': list[value]._id
        }) 
      })
      alert('Payment of Rs ' + list[value].Amount + ' is Successful')
      window.location.reload(false)
    }
  }

  //New Appointment Submit Function
  const handleSubmit = async (e) => {
    if (desc !== null && date != null && category != null) {
      e.preventDefault();
      var data = {
        name: Name,
        email: Email,
        date: date,
        category: category,
        desc: desc,
        make: Make,
        model: Model,
      };
      await fetch("http://localhost:8080/user/dashboard/newappoint", {
        method: "POST",
        mode: "cors",
        // Adding headers to the request
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        // Adding body or contents to send
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((json) => 
        {
          alert(json.Status)
          window.location.reload(false)
        }
        );
    } else {
      e.preventDefault();
      alert("Enter the value");
    }
  };
  const handledate = (e) => {
    setDate(e.target.value);
  };
  const handledesc = (e) => {
    setDesc(e.target.value);
  };
  const handlecat = (e) => {
    setCategory(e.target.value);
  };

  //Tracker Card
  const trackercard=()=>{
    if(value > -1){
    if(list[value].Status === 'Paid'){
      return(
        <div className="card">
        <h3>Current Appointments</h3>
        <p>You have no current Appointments</p>
      </div>
      )
    }
    else{
      return(
        <div className="card">
          <h3>Current Appointment</h3>
          <p><b>Date: </b> {list[value].Date}</p>
          <p><b>Description: </b> {list[value].Description}</p>
          <p><b>Status: </b> {list[value].Status}</p>
          <p><b>Amount to pay: </b>Rs {list[value].Amount}</p>
          <button className="payment-button" onClick={payment}>Pay Now</button>
        </div>
      )
    }
    }
  }

  if (Name === null || Name === undefined) {
    setTimeout(() => {
      navigate("/user/login");
    }, 2000);
    return (
      <>
        <div className="dashboard-error">
          <div className="container-error">
            <div className="img">
              <img src={logo} alt="logo" />
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
            Welcome,<br></br>
            <span> {Name}</span>
          </h2>
          <button onClick={nav}>Log Out</button>
        </div>
        <div className="cards">
          <div className="card cardeets">
            <h3>Your Car</h3>
            <p>
              <b>Make</b>: {Make}
            </p>
            <p>
              <b>Model</b>: {Model}
            </p>
          </div>
          <div className="card booking">
            <h3>Book an appointment</h3>
            <p>Fill in the details to book an appointment</p>
            <form onSubmit={handleSubmit}>
              <select value={category} onChange={handlecat} required>
                <option>Select a Category</option>
                <option>General</option>
                <option>Electrical</option>
                <option>Body Work</option>
                <option>Air Conditioning</option>
                <option>Engine Specialist</option>
              </select>
              <br></br>
              <input
                type="date"
                onChange={handledate}
                min={mindate}
                defaultValue={date}
                required
              />
              <br></br>
              <textarea
                placeholder="Description"
                onChange={handledesc}
                required
              ></textarea>
              <div className="buttons">
                <button type="submit">Submit</button>
              </div>
            </form>
          </div>
          {trackercard()}
        </div>
        <div className="card appointments">
          <h3>All Appointments</h3>
          <div className="table">
            <table className="table-user">
              <thead>
                <tr>
                  <td>Date</td>
                  <td>Category</td>
                  <td>Description</td>
                  <td>Status</td>
                  <td>Amount</td>
                </tr>
              </thead>
              <tbody>
                {list.map((item) => {
                  return (
                    <tr>
                      <td>{item.Date}</td>
                      <td>{item.Category}</td>
                      <td>{item.Description}</td>
                      <td>{item.Status}</td>
                      <td>{item.Amount}</td>
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
}
