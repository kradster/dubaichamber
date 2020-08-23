import React from 'react'
import './Register.scss'
// import logo from '../../Assets/bg.png'
import logo2 from '../../Assets/lcolorlogo.png'
import { Link } from 'react-router-dom'

const Register = () => {
    return (
        <div className="Register">
            <div className="landingpage-navbar">
                <div className="logo">
                    <img src={logo2} alt=""/>
                </div>
                <div className="close">
                <Link  to="/">&times;</Link>
                </div>
                
            </div>
            <div className="register-form">
                <form>

                <h1>REGISTER</h1>
                <div className="input-field">
                    <label htmlFor="fullname">Full name</label>
                    <input id="fullname" type="text"/>
                </div>
                <div className="input-field">
                    <label htmlFor="fullname">Email id</label>
                    <input id="fullname" type="text"/>
                </div>
                <div className="input-field">
                    <label htmlFor="fullname">Phone Number</label>
                    <input id="fullname" type="text"/>
                </div>
                <div className="input-field">
                    <label htmlFor="fullname">Company</label>
                    <input id="fullname" type="text"/>
                </div>
                <div className="input-field">
                    <label htmlFor="fullname">Designation</label>
                    <input id="fullname" type="text"/>
                </div>
                <div className="input-field">
                    <label htmlFor="fullname">Country</label>
                    <select>
                        <option>Dubai</option>
                        <option>UAE</option>
                    </select>
                </div>
                <div className="input-field">
                <button>SUBMIT</button>
                    </div>
                </form>
            </div>
            
        </div>
    )
}

export default Register
