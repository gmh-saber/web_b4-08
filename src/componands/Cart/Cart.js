import React from 'react';
import "./Cart.css"
const Cart = (props) => {
    const { cart } = props || {}
    const totalReducer = (previousValue, currentValue) => previousValue + currentValue.honorarium
    const total = cart.reduce(totalReducer, 0)
    return (
        <div>
            <h3><i className="fas fa-user-check"></i> Person Added : {cart.length}</h3>
            <h4> Selected Person list</h4>
            <ul> 
            {
                cart.map(person => <li><b>{person.name} </b></li>)
            }
            </ul>
            <h4>Total Cost:${total}</h4>
            <button className="btn btn-color text-white">Invited All</button>
        </div>
    );
};

export default Cart;