import React from 'react'
import './Confirm.css';
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const Confirm = () => {
    return (
        <div>
        <div className="c-container">
            <Navbar/>
            <div className="order">
                <h2>Order Summary</h2>
                <div className="o-menu">
                    <h3>Ordered Item</h3>
                </div>
                <div className="o-address">
                    <h3>Address and User Details</h3>
                </div>
            </div>
        </div>
        <Footer/>
        </div>
    )
}

export default Confirm
