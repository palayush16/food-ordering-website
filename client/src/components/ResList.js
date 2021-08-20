import React from 'react'
import './ResList.css';
import {Image,Button}  from 'react-bootstrap/';
import img6 from '../images/offers/img6.jpg'
import img5 from '../images/offers/img5.jpg'
import img4 from '../images/offers/img4.jpg'
import { Link } from "react-router-dom";


const ResList = () => {
    return (
        <div className="contain">
            <h1>OUR PARTNERS</h1>
        <div className="containero">
            
            <div className="cardo">
                <div className="imgBx">
                <Image src={img4} thumbnail/>
                </div>
                <div className="contento">
                    <h4>The Royal Cafe</h4>
                    <p></p>
                    <Link to="/menu"><button variant="danger">Order Now</button></Link>
                    <button variant="primary">Explore </button>

                </div>
            </div>
            
            <div className="cardo">
                <div className="imgBx">
                <Image src={img5} thumbnail/>
                </div>
                <div className="contento">
                    <h4>Dastarkhwan</h4>
                    <p></p>
                    <Link to="/menu"><button variant="danger">Order Now</button></Link>
                    <button variant="primary">Explore </button>
                </div>
            </div>
            <div className="cardo">
                <div className="imgBx">
                <Image src={img6} thumbnail/>
                </div>
                <div className="contento">
                    <h4>Tunday Kababi</h4>
                    <p></p>
                    <Link to="/menu"><button variant="danger">Order Now</button></Link>
                    <button variant="primary">Explore </button>
                </div>
            </div>
            b
          
        </div>
        </div>
    )
}

export default ResList
