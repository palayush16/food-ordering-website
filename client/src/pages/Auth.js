import React , { useState, useEffect } from 'react'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import './Auth.css';
import imgl2 from '../images/l2.jpg'
import imgl1 from '../images/l1.jpg'

import { Link } from "react-router-dom";


// function toggleForm(){
//     var container=document.querySelector('.container');
//     container.classList.toggle('active');

// }

const Auth = () => {

    const [isActive,setActive]=useState("true");

    const toggleForm=()=>{
        setActive(!isActive);
        
    };

    return (
        <div>
            <Navbar/>
            <section>
            <div className={`container ${isActive ? "active" : ""}`}>
                
                <div className="user signinBx">
                    <div className="imgBx"><img src={imgl2}/></div>
                    <div className="formBx">
                        <form>
                            <h2>Sign In</h2>
                            <input type="text" name="" placeholder="Username"/>
                            <input type="password" name="" placeholder="Password"/>
                            <Link to="/respage"><input type="submit" name="" value="Login"/></Link>
                            <p className="signup">Don't have a account?<a href="#" onClick={toggleForm}>Sign Up</a></p>
                        </form>
                    </div>
                </div>

                <div className="user signupBx">
                    
                    <div className="formBx">
                        <form>
                            <h2>Create an Account</h2>
                            <input type="text" name="" placeholder="Username"/>
                            <input type="email" name="" placeholder="Email Address"/>
                            <input type="password" name="" placeholder="Password"/>
                            <Link to="/respage"><input type="submit" name="" value="Signup"/></Link>
                            <p className="signup">Already have a account?<a href="#" onClick={toggleForm} >Sign In</a></p>
                        </form>
                    </div>
                    <div className="imgBx"><img src={imgl1}/></div>
                </div>
            </div>
        </section>
        <Footer/>         
        </div>
    )
}

export default Auth
