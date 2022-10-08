import React, { useContext } from 'react';
import { GiftContext } from '../Grandpa/Grandpa';

const Special = () => {
    const [house, setHouse]= useContext(GiftContext)
    return (
        <div>
            <p>Special</p>
            <p>Gift: {house}</p>
            <button onClick={()=> setHouse(house+1)}>add house</button>
        </div>
    );
};

export default Special;