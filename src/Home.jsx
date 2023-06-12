import './styles/home.css'
import { motion } from 'framer-motion'
import video from './Videos/homevideo.mp4'
import logo from './Images/output.png'

export default function Home(){
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
                <li><a href='#home' className='link'>Home</a></li>
                <li><a href='#about' className='link'>Who we are</a></li>
                <li><a href='#services' className='link'>What we do</a></li>
                <li><a href='#book' className='link'>Book Now</a></li>
                <li><a href='#contact' className='link'>Contact</a></li>
                <li><a href='/login' className='link account'>Account</a></li>
            </ul>
        </motion.nav>
        <div className="content">
        <section className='container container-first home' id='home'>
            <motion.h1 animate={{y:-20}} initial={{y:20}} transition={{ease: "easeOut", duration:1}}>Welcome to mec<span>X</span></motion.h1>
            <p>Scroll down to learn more</p>
        </section>
        <section className='container about bg' id='about'>
            <h1>Who we are</h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia accusamus sed veniam, repellendus quo temporibus! Quis debitis dolore consequuntur repudiandae! Perferendis illo 
            tempore tenetur quis nisi optio accusantium quia adipisci neque vitae aperiam, ducimus at dolorem dolores, error harum laborum recusandae hic quisquam suscipit
             doloribus dolor vel praesentium? Est, maxime.
        </section>
        <section className='container services bg' id='services'>
            <h1>What we do</h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia accusamus sed veniam, repellendus quo temporibus! Quis debitis dolore consequuntur repudiandae! Perferendis illo 
            tempore tenetur quis nisi optio accusantium quia adipisci neque vitae aperiam, ducimus at dolorem dolores, error harum laborum recusandae hic quisquam suscipit
             doloribus dolor vel praesentium? Est, maxime.
        </section>
        <section className='container book bg' id='book'>
            <h1>Book Now</h1>
            <p>Want to book an Appointment with us?. <br></br>Click the button below</p>
        </section>
        <section className='container contact bg' id='contact'>
            <h1>Contact Us</h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia accusamus sed veniam, repellendus quo temporibus! Quis debitis dolore consequuntur repudiandae! Perferendis illo 
            tempore tenetur quis nisi optio accusantium quia adipisci neque vitae aperiam, ducimus at dolorem dolores, error harum laborum recusandae hic quisquam suscipit
             doloribus dolor vel praesentium? Est, maxime.
        </section>
        </div>
        </div>
    )
}