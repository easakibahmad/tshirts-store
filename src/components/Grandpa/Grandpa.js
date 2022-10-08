import React from 'react';
import './Grandpa.css'
import Father from '../Father/Father';
import Aunty from '../Aunty/Aunty';
import Uncle from '../Uncle/Uncle';

const Grnadpa = () => {
    const house = 7
    return (
        <div className='grandpa'>
            <p>Grandpa</p>
            <section className='flex'>
                <Father house={house}></Father>
                <Uncle house={house}></Uncle>
                <Aunty house={house}></Aunty>
            </section>
        </div>
    );
};

export default Grnadpa;