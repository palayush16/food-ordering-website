import React from 'react'
import './Menuform.css';
import Navbar from "./Navbar"
import Footer from "./Footer"
import { Link } from "react-router-dom";
import dman from '../images/dman.jpg'


const Menuform = () => {
    return (
        <div>
            <div className="dn-container">
                <Navbar/>
            </div>
            <div className="d-container">
                
                <div className="ddd">
                    <div className="formBx">
                            <form>
                                
                                <input type="number" name="" placeholder="Restaurant No."/>
                                <input type="text" name="" placeholder="Menu-Type"/>
                                <input type="text" name="" placeholder="Item-Name"/>
                                <input type="number" name="" placeholder="Price"/>
                               
                                <Link to="/confirm"><input type="submit" name="" value="Add Menu"/></Link>
                                
                            </form>
                    </div>
                    
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Menuform
