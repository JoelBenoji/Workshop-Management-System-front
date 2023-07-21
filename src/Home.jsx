import "./styles/home.css";
import { motion, useScroll, useTransform } from "framer-motion";
import video from "./Videos/homevideo.mp4";
import logo from "./Images/output.png";
import { useRef } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCalendarCheck,
  faClock,
  faWarehouse,
  faMoneyBill,
  faCarCrash,
} from "@fortawesome/free-solid-svg-icons";
library.add(faCalendarCheck);
library.add(faClock);
library.add(faWarehouse);
library.add(faMoneyBill);

export default function Home() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });
  const opacityHero = useTransform(scrollYProgress, [0, 0.25], [1, 0]);
  const opacityDown = useTransform(scrollYProgress, [0, 0.001], [1, 0]);

  return (
    <div className="homepage">
      <div className="video">
        <video src={video} autoPlay loop muted />
      </div>
      <motion.nav
        animate={{ y: 10 }}
        initial={{ y: -10 }}
        transition={{ ease: "easeOut", duration: 1 }}
      >
        <ul>
          <li className="logo">
            <img src={logo} alt="logo" />
          </li>
          <li>
            <a href="/" className="link">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="link">
              Who we are
            </a>
          </li>
          <li>
            <a href="#services" className="link">
              What we do
            </a>
          </li>
          <li>
            <a href="#book" className="link">
              Book Now
            </a>
          </li>
          <li>
            <a href="#contact" className="link">
              Contact
            </a>
          </li>
          <li>
            <a href='/emergency' className="link">
              Emergency
            </a>
          </li>
          <li>
            <a href="/user/login" className="link account">
              Account
            </a>
          </li>
        </ul>
      </motion.nav>
      <div className="content">
        <motion.section
          style={{ opacity: opacityHero }}
          ref={targetRef}
          className="container-first"
          id="home"
        >
          <motion.h1
            animate={{ y: -20 }}
            initial={{ y: 20 }}
            transition={{ ease: "easeOut", duration: 1 }}
          >
            Welcome to mec<span>X</span>
          </motion.h1>
          <motion.p style={{ opacity: opacityDown }}>
            Scroll down to learn more
          </motion.p>
        </motion.section>
        <section className="container about bg" id="about">
          <h2>
            Who we <span>are</span>
          </h2>
          <p className="about-p">
            At MecX, we are dedicated to revolutionizing the way workshops
            operate. We provide a comprehensive software solution designed
            specifically to streamline the operations in a workshop and achieve
            greater efficiency.
          </p>
          <p className="about-p">
            With a deep understanding of the challenges faced by workshop
            businesses, our experienced team has developed a user-friendly and
            feature-rich platform that addresses the needs of our customers .
          </p>
          <p className="about-p">
            {" "}
            Our mission is to optimize processes, enhancing productivity, and
            delivering exceptional service to our customers. Key features of
            MecX include
          </p>
          <div className="features">
            <div className="feature">
              <FontAwesomeIcon
                className="icon"
                icon={faCalendarCheck}
                style={{ color: "#009a7f", width: "40rem" }}
              />
              <h3>Appointment Management</h3>
              <p>
                Effortlessly schedule and manage customer appointments and
                assign technicians
              </p>
            </div>
            <div className="feature">
              <FontAwesomeIcon
                className="icon"
                icon={faClock}
                style={{ color: "#009a7f", width: "40rem" }}
              />
              <h3>Job Tracking</h3>
              <p>
                Track the progress of every job, from initial intake to
                completion.
              </p>
            </div>
            <div className="feature">
              <FontAwesomeIcon
                className="icon"
                icon={faCarCrash}
                style={{ color: "#009a7f", width: "40rem" }}
              />
              <h3>Emergency Services</h3>
              <p>
                Track the progress of every job, from initial intake to
                completion.
              </p>
            </div>
          </div>
          <p className="about-p">
            At MecX, we prioritize exceptional customer support. Our dedicated
            team is committed to providing prompt assistance, ensuring a smooth
            onboarding process and ongoing support for all your needs.
          </p>
          <p className="about-p">
            Contact us today to learn more about how our system can benefit you.
          </p>
        </section>
        <section className="container services bg" id="services">
          <h2>
            What we <span>do</span>
          </h2>
          <p className="about-p">
            Welcome to MecX – your ultimate workshop management solution.
          </p>
          <p className="about-p">
            Our platform is meticulously crafted to revolutionize workshop
            organization and administration. With MecX, we automate the entire
            scheduling process, empowering you to effortlessly set up, modify,
            and cancel workshop sessions.
          </p>
          <p className="about-p">
            Emphasizing convenience, attendee registration is streamlined,
            enabling participants to easily sign up for workshops online. Say
            goodbye to tedious paperwork and hello to secure online payment
            processing, lightening the administrative burden for organizers.
            MecX takes care of the details, so you can focus on what truly
            matters –exceptional workshop services for your cars.
          </p>
        </section>
        <section className="container book bg" id="book">
          <h2>
            Book <span>Now</span>
          </h2>
          <p className="about-p">Want to book an Appointment with us?</p>
          <p className="about-p">Click the button below to login</p>
          <a href="/user/login" className="btn-book">
            Log In
          </a>
        </section>
        <section className="container contact bg" id="contact">
          <h2>
            Contact <span>Us</span>
          </h2>
          <p className="about-p">
            If you have any questions or need assistance, feel free to reach out
            to us:
            <ul>
              <li>Phone: 9544740014 </li>
              <li>Email: vijayanarjun4@gmail.com </li>
            </ul>
          </p>
          <p className="about-p">
            Our customer support team is here to help you!
          </p>
          <p className="about-p">
            We welcome your feedback and suggestions to improve our system and
            make it even better for you. Let us know how we can assist you.
          </p>
        </section>
      </div>
      <footer>
        <p>
          Copyright of mecX 2023 |{" "}
          <a rel="noopener" href="https://stock.adobe.com" className="link">
            Images and Videos by Adobe Stock
          </a>{" "}
          |{" "}
          <a href="/devs" className="link">
            {" "}
            Meet the Developers
          </a>
        </p>
      </footer>
    </div>
  );
}
