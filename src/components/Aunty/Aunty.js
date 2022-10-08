import React from 'react';
import Cousins from '../Cousins/Cousins';

const Aunty = ({house}) => {
    return (
        <div>
            <p>Aunty</p>
            <p>House: {house}</p>
            <section className='flex'> 
                <Cousins house={house}></Cousins>
                <Cousins house={house}></Cousins>
            </section>
        </div>
    );
};

export default Aunty;