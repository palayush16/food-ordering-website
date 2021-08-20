import React from 'react'
import './Navbar.css';
import { Link } from "react-router-dom";

const toggleFunc = () => {
    const hamburger=document.querySelector('.hamburger');
    const navlinks=document.querySelector('.nav-links');
    navlinks.classList.toggle('show');

}

const Navbar = () => {
    window.addEventListener('scroll',function(){
        var navContainer=document.querySelector('.nav-container');
        navContainer.classList.toggle('sticky',window.scrollY>0);
    })



    return (
        <div className="nav-container">
            <div className="nav-logo">
            <h1>NAWAABI ZAIKA</h1>
            </div>
            <div className="hamburger" onClick={toggleFunc}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
            <div className="nav-links show">
                <ul className="nav-links-list">
                <Link to="/"><li><a href="#">Home</a></li></Link>
                <Link to="/menu"><li><a href="#">Services</a></li></Link>
                <Link to="/"><li><a href="#">About Us</a></li></Link>
                <Link to="/auth"><li><a href="#">Sign</a></li></Link>
                </ul>
            </div>
            
        </div>
    )
}

export default Navbar
