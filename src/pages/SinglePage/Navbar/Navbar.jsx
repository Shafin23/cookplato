import React from 'react';
import UpperNav from './UpperNav/UpperNav';
import LowerNav from './LowerNav/LowerNav';

const Navbar = () => {
    return (
        <div className='hidden xl:block'>
            <UpperNav/>
            <LowerNav/>
        </div>
    );
};

export default Navbar;