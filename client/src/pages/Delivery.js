import React from 'react'
import './Delivery.css';
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { Link } from "react-router-dom";
import dman from '../images/dman.jpg'


const Delivery = () => {
    return (
        <div>
            <div className="dn-container">
                <Navbar/>
            </div>
            <div className="d-container">
                <h2>Your Delivery Address</h2>
                <div className="ddd">
                    <div className="formBx">
                            <form>
                                <h3>Let us know how to reach you</h3>
                                <input type="text" name="" placeholder="First line Address"/>
                                <input type="text" name="" placeholder="Second line Address"/>
                                <input type="text" name="" placeholder="City"/>
                                <input type="number" name="" placeholder="Pincode"/>
                                <input type="number" name="" placeholder="Contact No."/>
                                <Link to="/confirm"><input type="submit" name="" value="Confirm Booking"/></Link>
                                
                            </form>
                    </div>
                    <img  className="i-container" src={dman}/>  
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Delivery
