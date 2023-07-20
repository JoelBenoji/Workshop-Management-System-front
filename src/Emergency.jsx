import "./styles/emergency.css";
import logo from "./Images/output.png";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";

export default function Emergency() {
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState(null);
  const [info, setInfo] = useState();

  const navigate = useNavigate();
  useEffect(() => {
    fetch("http://localhost:8080/emergencydata/", {
      method: "get",
      mode: "cors",
      // Adding headers to the request
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then(
        response=>response.json()
    ).then(
        json=>{
            setInfo(json)
        }
    )
  }, info);
  //Handle Input Change
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handlePhone = (e) => {
    setPhone(e.target.value);
  };
  const handleDesc = (e) => {
    setDesc(e.target.value);
  };
  //Get Location Function
  const Locate = () => {
    if (!navigator.geolocation) {
      setStatus("Geolocation is not supported by your browser");
    } else {
      setStatus("Locating...");
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setStatus(null);
          setLat(position.coords.latitude);
          setLng(position.coords.longitude);
        },
        () => {
          setStatus("Unable to retrieve your location");
        }
      );
    }
  };

  //Submit Function
  const Submit = (e) => {
    e.preventDefault();
    fetch("http://localhost:8080/emergency/", {
      method: "post",
      mode: "cors",
      // Adding headers to the request
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      // Adding body or contents to send
      body: JSON.stringify({
        Name: name,
        Phone: phone,
        Description: desc,
        Latitude: lat,
        Longitude: lng,
      }),
    })
      .then((response) => response.json())
      .then((json) => {
        setInfo(json);
      });
  };

  //Location Button
  const LocateButton = () => {
    if (lat === null) {
      return <button onClick={Locate}>Share my location</button>;
    } else {
      return <p className="locate-p">Location received</p>;
    }
  };

  //Form Module
  const Form = () => {
    if (info === undefined) {
      return (
        <form onSubmit={Submit}>
          <h2>Emergency Form</h2>
          <input
            placeholder="Name"
            value={name}
            onChange={handleName}
            type="text"
          />
          <input
            placeholder="Phone Number"
            min="10"
            value={phone}
            onChange={handlePhone}
            type="number"
            required
          />
          <input
            placeholder="Description"
            value={desc}
            onChange={handleDesc}
            type="text"
          />

          <LocateButton />

          <button type="submit">Submit</button>
        </form>
      );
    } else {
      return (
        <>
          <h2>We'll be there soon</h2>
          <p className="locate-p">
            We will be on your Location as soon as possible. Stay safe
          </p>
          <a href="tel:9544740014">
            <button>Contact us</button>
          </a>
        </>
      );
    }
  };

  return (
    <div className="content-emergency">
      <div
        className="em-logo"
        onClick={() => {
          navigate("/");
        }}
      >
        <img src={logo} />
        <h2>M . E . C . X</h2>
      </div>
      <h1>Welcome to our Emergency Services</h1>
      <p>Fill in the form below and our Employee will reach you shortly.</p>
      <p>
        Phone number is Required and we encourage you to provide us with as
        maximum information as possible for swift service.
      </p>
      <div className="em-form-container">
        <div className="em-form">{Form()}</div>
      </div>
    </div>
  );
}
