import React from 'react'
import Navbar from "../components/Navbar"
import Homepage from "../components/Homepage"
import ResList from '../components/ResList'
import Footer from '../components/Footer'
import Outlets from '../components/Outlets'
import './Home.css';



const Home = () => {
    return (
        <div>
            <Navbar/>
            <Homepage className="homepage"/>
            <ResList/>
            
            <Footer/> 
        </div>
    )
}

export default Home
