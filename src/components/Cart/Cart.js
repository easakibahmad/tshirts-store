import React from 'react';
import './Cart.css'

const Cart = ({cart,handleDeleteCart}) => {

    // let message;

    // if(cart.length === 0){
    //     message = <p>please buy one</p>
    // }
    // else{
    //     message = <p>thanks for buying</p>
    // }
    return (
        <div>
            <h3 className={`bold ${cart.length === 2 ? 'yellow':'green'}`}>Order Summery {cart.length}</h3>
            {
                cart.map(ts => 
                <p>{ts.name}
                <button onClick={()=>handleDeleteCart(ts)}>X</button>
                </p>
                )
            }
            {/* {
                message
            } */}

            {/* {
                cart.length === 0 ? <p>please buy one</p>: <p>thanks for buying</p>
            } */}

            {/* {
                cart.length===0 && <p>please buy one</p>
            } */}

            {/* {
                cart.length === 1 || <p>thanks for buying</p>
            } */}
        </div>
    );
};

export default Cart;