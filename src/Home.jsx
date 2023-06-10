import './styles/home.css'
import { motion } from 'framer-motion'

export default function Home(){
    return(
        <div className='homepage'>
        <motion.nav
        animate = {{y:10}} initial = {{y:-10}}
        transition={{ease:"easeOut",duration:1.5}}
        >
            <ul>
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
            <h1>Welcome to mec<span>X</span></h1>
            <p>Scroll down to learn more.</p>
        </section>
        <section className='container about' id='about'>
            <h1>Who we are</h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia accusamus sed veniam, repellendus quo temporibus! Quis debitis dolore consequuntur repudiandae! Perferendis illo 
            tempore tenetur quis nisi optio accusantium quia adipisci neque vitae aperiam, ducimus at dolorem dolores, error harum laborum recusandae hic quisquam suscipit
             doloribus dolor vel praesentium? Est, maxime.
        </section>
        <section className='container services' id='services'>
            <h1>What we do</h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia accusamus sed veniam, repellendus quo temporibus! Quis debitis dolore consequuntur repudiandae! Perferendis illo 
            tempore tenetur quis nisi optio accusantium quia adipisci neque vitae aperiam, ducimus at dolorem dolores, error harum laborum recusandae hic quisquam suscipit
             doloribus dolor vel praesentium? Est, maxime.
        </section>
        <section className='container book' id='book'>
            <h1>Book Now</h1>
            <p>Want to book an Appointment with us?. <br></br>Click the button below</p>
        </section>
        <section className='container contact' id='contact'>
            <h1>Contact Us</h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia accusamus sed veniam, repellendus quo temporibus! Quis debitis dolore consequuntur repudiandae! Perferendis illo 
            tempore tenetur quis nisi optio accusantium quia adipisci neque vitae aperiam, ducimus at dolorem dolores, error harum laborum recusandae hic quisquam suscipit
             doloribus dolor vel praesentium? Est, maxime.
        </section>
        </div>
        </div>
    )
}