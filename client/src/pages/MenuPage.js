import React from 'react'
import Navbar from "../components/Navbar"
import Menu from "../components/Menu"
import Cart from "../components/Cart"
import Menuform from '../components/Menuform'
import Footer from "../components/Footer"

import './MenuPage.css';


const MenuPage = () => {
    return (
        <div>
            <Navbar/>
            <div className="m-container">
                <Menu className="m-container-menu"/>
                <Cart className="m-container-cart"/>
            </div>
            <Menuform/>
            <Footer/>
        </div>
    )
}

export default MenuPage
