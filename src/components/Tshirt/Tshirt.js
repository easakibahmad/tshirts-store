import React from 'react';
import './Tshirt.css'

const Tshirt = ({tshirt, handleAddtoCart}) => {
    const {name, price, picture} = tshirt
    return (
        <div className='single-tshirt'>
            <img src={picture} alt="" />
            <h3>{name}</h3>
            <h5>Price: {price}</h5>
            <button onClick={()=>handleAddtoCart(tshirt)}>Buy This</button>
        </div>
    );
};

export default Tshirt;