import './styles/home.css'
import { motion, useScroll, useTransform } from 'framer-motion'
import video from './Videos/homevideo.mp4'
import logo from './Images/output.png'
import { useRef } from 'react'

export default function Home(){


    const targetRef = useRef(null);
    const {scrollYProgress}= useScroll({
        target: targetRef,
        offset: ["end end", "end start"]
    })
    const opacityHero = useTransform(scrollYProgress, [0,0.25], [1,0])
    const opacityDown = useTransform(scrollYProgress, [0,0.001], [1,0])


    return(
        <div className='homepage'>
        <div className="video">
        <video src={video} autoPlay loop muted/>
        </div>
        <motion.nav
        animate = {{y:10}} initial = {{y:-10}}
        transition={{ease:"easeOut",duration:1}}
        >
            <ul>
                <li className='logo'><img src={logo} alt='logo'/></li>
                <li><a href='/' className='link'>Home</a></li>
                <li><a href='#about' className='link'>Who we are</a></li>
                <li><a href='#services' className='link'>What we do</a></li>
                <li><a href='#book' className='link'>Book Now</a></li>
                <li><a href='#contact' className='link'>Contact</a></li>
                <li><a href='/user/login' className='link account'>Account</a></li>
            </ul>
        </motion.nav>
        <div className="content">
        <motion.section style={{opacity:opacityHero}} ref={targetRef} className='container-first' id='home'>
            <motion.h1 animate={{y:-20}} initial={{y:20}} transition={{ease: "easeOut", duration:1}}>Welcome to mec<span>X</span></motion.h1>
            <motion.p style={{opacity: opacityDown}}>Scroll down to learn more</motion.p>
        </motion.section>
        <section className='container about bg' id='about'>
            <h2>Who we <span>are</span></h2>
            At mecX, we're changing the way you service your car. With our convenient online platform, you can schedule appointments, track progress, and access top-quality car services from anywhere. Our certified technicians and transparent pricing ensure a hassle-free experience. Join mecX today and discover the future of car servicing.
        </section>
        <section className='container services bg' id='services'>
            <h2>What we <span>do</span></h2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia accusamus sed veniam, repellendus quo temporibus! Quis debitis dolore consequuntur repudiandae! Perferendis illo 
            tempore tenetur quis nisi optio accusantium quia adipisci neque vitae aperiam, ducimus at dolorem dolores, error harum laborum recusandae hic quisquam suscipit
             doloribus dolor vel praesentium? Est, maxime.
        </section>
        <section className='container book bg' id='book'>
            <h2>Book <span>Now</span></h2>
            <p>Want to book an Appointment with us?. <br></br>Click the button below</p>
        </section>
        <section className='container contact bg' id='contact'>
            <h2>Contact <span>Us</span></h2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia accusamus sed veniam, repellendus quo temporibus! Quis debitis dolore consequuntur repudiandae! Perferendis illo 
            tempore tenetur quis nisi optio accusantium quia adipisci neque vitae aperiam, ducimus at dolorem dolores, error harum laborum recusandae hic quisquam suscipit
             doloribus dolor vel praesentium? Est, maxime.
        </section>
        </div>
        </div>
    )
}