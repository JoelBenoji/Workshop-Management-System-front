import { useState } from "react";
import { useNavigate } from "react-router";
import "./styles/login.css";
import logo from "./Images/output.png";

export default function AdminLogin() {
  const [empid, setEmp] = useState();
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState("");
  const [name, setName] = useState("");

  const navigate = useNavigate();

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const home = () => {
    navigate("/");
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
  };
  var data = {
    Password: password,
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (data.Empid === "" || data.Password === "") {
      setError(true);
    } else {
      fetch("http://localhost:8080/adminlogin", {
        method: "POST",
        mode: "cors",
        // Adding headers to the request
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        // Adding body or contents to send
        body: JSON.stringify(data),
      })
        // Converting to JSON
        .then((response) => response.json())
        .then((json) => {
          setName(json.Name);
          setSuccess("true");
          // Displaying results to console
          if (json.Success === "true") {
            setSubmitted(true);
            navigate("/admin/dashboard", { state: { Name: json.Name } });
            setError(false);
          } else {
            setError(true);
            setSubmitted(false);
          }
        });
    }
  };

  // Showing error message if error is true
  const errorMessage = () => {
    return (
      <div
        className="error-message"
        style={{
          display: error ? "" : "none",
        }}
      >
        <p>Invalid details, please try again</p>
      </div>
    );
  };
  return (
    <div className="container-login">
      <div className="headings">
        <div className="headings-text">
          <img src={logo} className="logo-login" alt="logo" onClick={home} />
          <h2>M . E . C . X</h2>
          <p>Admin Login</p>
        </div>
      </div>
      <div className="login-card">
        <div className="login-cred">
          <h1>Welcome</h1>
          <p className="desc">Login as Administrator</p>
          <form>
            <input
              onChange={handlePassword}
              value={password}
              type="password"
              className="textbox"
              placeholder="Password"
            />
            <br></br>

            <div className="buttons">
              <button onClick={handleSubmit} type="submit">
                Submit
              </button>
            </div>
          </form>
          <div className="messages">{errorMessage()}</div>
        </div>
      </div>
    </div>
  );
}
