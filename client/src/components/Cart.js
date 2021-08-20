import React from 'react'
import './Cart.css';
import { Button,Card,Table}  from 'react-bootstrap/';
import {FaPlusSquare, FaMinusSquare} from "react-icons/fa";
import { Link } from "react-router-dom";


const Cart = () => {
    return (
        <div>
            <div className="cart-container">
                <h2>Cart</h2>
                <Table striped bordered hover >
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>Item</th>
                        <th>Qty</th>
                        <th>Price(₹)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>1</td>
                        <td>Palak Paneer</td>
                        <td><FaPlusSquare/>1<FaMinusSquare/></td>
                        <td>500</td>
                        </tr>
                        <tr>
                        <td>2</td>
                        <td>Butter Naan</td>
                        <td><FaPlusSquare/>8<FaMinusSquare/></td>
                        <td>50</td>
                        </tr>
                        <tr>
                        
                        <td colSpan="3">Total</td>
                        <td>₹2999</td>
                        </tr>
                    </tbody>
                </Table>
                
                <Link to="/delivery"><button>add delivery address</button></Link>
                <h5>*Terms and Conditions Applied</h5>

            </div>
        </div>
    )
}

export default Cart
