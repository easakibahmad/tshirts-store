import React, { createContext, useState } from 'react';
import './Grandpa.css'
import Father from '../Father/Father';
import Aunty from '../Aunty/Aunty';
import Uncle from '../Uncle/Uncle';

export const GiftContext = createContext('matir ring')

const Grnadpa = () => {
    // const house = 7
    // const gift = 'gold ring'
    const [house, setHouse]=useState(1)
    return (
        <GiftContext.Provider value={[house, setHouse]}>
            <div className='grandpa'>
            <p>Grandpa</p>
            <section className='flex'>
                <Father house={house}></Father>
                <Uncle house={house}></Uncle>
                <Aunty house={house}></Aunty>
            </section>
        </div>
        </GiftContext.Provider>
    );
};

export default Grnadpa;