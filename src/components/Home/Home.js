import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import Tshirt from '../Tshirt/Tshirt';
import './Home.css'

const Home = () => {
    const tshirts = useLoaderData()
    const [cart, setCart]=useState([])

    const handleAddtoCart = tshirt => {
        // console.log(tshirt)
        const exists = cart.find(ts => ts._id === tshirt._id)
        if(exists){
            alert('tshirt is already added')
        }
        else{
            const newCart = [...cart, tshirt]
            setCart(newCart)
        }

    }

    const handleDeleteCart = tshirt => {
        const remove = cart.filter(ts => ts._id !== tshirt._id)
        setCart(remove)
    }

    return (
        <div className='tshirt-sidebar-container'>
            <div className='tshirts-container'>
            {
                tshirts.map(tshirt => <Tshirt 
                key={tshirt._id}
                tshirt={tshirt}
                handleAddtoCart={handleAddtoCart}
                ></Tshirt>)
            }
            </div>
            <div>
                <Cart
                cart={cart}
                handleDeleteCart={handleDeleteCart}
                ></Cart>
            </div>
        </div>
    );
};

export default Home;