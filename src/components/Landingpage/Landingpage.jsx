import React from 'react'
import './Landingpage.scss'
import fb from '../../Assets/fb.png'
import insta from '../../Assets/insta.png'
import twitter from '../../Assets/twitter.png'
import logo from '../../Assets/white.png'
import logo2 from '../../Assets/lcolorlogo.png'
import { Link } from 'react-router-dom'

const Landingpage = () => {
    return (
        <div className="Landingpage">
            <div className="landingpage-navbar">
                <div className="logo">
                    <img src={logo} alt=""/>
                </div>
                <ul>
                    <li><a href="#about">About</a></li>
                    <li><a href="#speaker">Speakers</a></li>
                    <li><a href="#agenda">Agenda</a></li>
                    <li><Link to="/register">REGISTER</Link></li>
                </ul>
            </div>
            <div className="landingpage-timer">
                <div className="timer">
                    <p>GOING VIRTUAL</p>
                    <h1>The Digital Events</h1>
                    <ul className="timebar">
                        <li>3 <span>DAYS</span></li>
                        <li>14 <span>HOURS</span></li>
                        <li>21 <span>MINUTES</span></li>
                        <li>37 <span>SECONDS</span></li>
                    </ul>
                </div>
                <div className="social">
                    <ul>
                        <li><img src={fb} alt=""/></li>
                        <li><img src={insta} alt=""/></li>
                        <li><img src={twitter} alt=""/></li>
                    </ul>
                </div>
            </div>
            
            
            
            
            
            <div id="about" className="landingpage-about">
                <h3>ABOUT</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi vel modi deserunt dolore repudiandae sapiente dolorem ex molestiae, unde placeat!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi vel modi deserunt dolore repudiandae sapiente dolorem ex molestiae, unde placeat! Lorem ipsum, 
                    dolor sit amet consectetur adipisicing elit. Vitae rerum facere saepe! Alias impedit corrupti commodi aspernatur. Sequi, neque voluptas. </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni deleniti numquam nemo iusto soluta ipsa illum. Dolorum repellendus officia expedita, atque ipsa, aliquid unde enim eum veritatis deserunt maxime cum!</p>
            </div>
            <div id="speaker" className="landingpage-speaker">
                <h3>SPEAKERS</h3>
                <ul className="speakers">
                    <li>
                        <img src="https://alexstudio.ch/wp-content/uploads/2019/01/business.portrait.cv_.resume.geneva.02.jpg" alt=""/>
                        <div className="overlay-text">
                           <span>Mark Weingberger</span> 
                        </div>
                    </li>
                    <li>
                        <img src="https://www.rrim.info/uploads/2/1/7/1/21715268/rrim-191203-portrait-mifa-0133-lr-pp-web.jpg" alt=""/>
                        <div className="overlay-text">
                           <span> Beth Brooke</span>
                        </div>
                    </li>
                    <li>
                        <img src="https://alexstudio.ch/wp-content/uploads/2019/01/business.portrait.cv_.resume.geneva.30.jpg" alt=""/>
                        <div className="overlay-text">
                       <span> Arthur Young</span>
                        </div>
                    </li>
                    <li>
                        <img src="https://i.pinimg.com/originals/77/71/68/7771683223d86b237a3304d6f32828b9.jpg" alt=""/>
                        <div className="overlay-text">
                           <span> Arthur Young</span>
                        </div>
                    </li>
                </ul>
            </div>
            <div id="agenda" className="landingpage-agenda">
                <h3>Agenda</h3>
                <ul className="agenda-grid">
                    <li className="blankw"></li>
                    <li className="blankw"></li>
                    <li className="active">
                        <span className="time">08:50 am - 09:10 am</span>
                        <span className="title">Attendees Login</span>
                        <span className="text"></span>
                    </li>
                    <li className="blankw2"></li>
                    <li className="blankw3"></li>
                    <li className="active live">
                        <span className="time">09:10 am - 09:15 am</span>
                        <span className="title">Introduction by</span>
                        <span className="text">
                            Facilitator Layla Derraz <br/>
                            Project Director, International <br/>
                            Relations Dubai Chamber of <br/>
                            Commerce & Industry
                        </span>
                    </li>
                    <li className="active">
                        <span className="time">09:15 am - 09:20 am</span>
                        <span className="title">Welocome Address</span>
                        <span className="text">
                            Mr. Hassan AI Hashemi <br/>
                            Vice President, International Relations <br/>
                            Dubai Chamber of Commerce & Industry
                        </span>
                    </li>
                    <li className="active">
                        <span className="time">09:20 am - 09:50 am</span>
                        <span className="title">Moderator</span>
                        <span className="text">
                            Natalia Sycheva <br/>
                            Entrepreneurship Head, Dubai <br/>
                            Start-Up Hub <br/>
                            Dubai Chamber of Commerce & Industry
                        </span>
                    </li>
                    <li className="blankw"></li>
                    <li className="active">
                        <span className="time">09:50 am - 10:00 am</span>
                        <span className="title">Questions & Answers</span>
                        <span className="text"></span>
                    </li>
                    <li className="blankw2"></li>
                    <li className="blankw3"></li>

                </ul>
            </div>
            <footer>
                <div className="logo">
                        <img src={logo2} alt=""/>
                    </div>
                    <div className="linkbar">
                        <ul>
                            <li><a href="#about">About</a></li>
                            <li><a href="#speaker">Speakers</a></li>
                            <li><a href="#agenda">Agenda</a></li>
                            <li><Link to="/register">REGISTER</Link></li>
                        </ul>
                        <span>Copyright &copy; Dubai Chamber of Commerce & Industry </span>

                    </div>

            </footer>
           
        </div>
    )
}

export default Landingpage
