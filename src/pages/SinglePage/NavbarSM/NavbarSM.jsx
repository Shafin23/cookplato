import React from 'react';
import { VscThreeBars } from "react-icons/vsc";
import { IoIosSearch } from "react-icons/io";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from 'react-router-dom';

const NavbarSM = () => {
    return (
        <div className=' py-5 w-11/12 mx-auto flex justify-between items-center md:hidden'>

            {/* menu icons --------------------------------  */}
            <VscThreeBars className=' text-7xl hover:text-8xl transition-all'/>

            {/* logo ----------------------------------- */}
            <div><Link to="/" className=' flex justify-center items-center'><img src="/assets/images/logo.webp" className=' w-7/12' alt="" /></Link></div>

            {/* search icon and cart icon ---------------------- */}
            <div className=' flex justify-between items-center'>
               
                {/* search icon */}
                <IoIosSearch className=' text-3xl me-3' />
                {/* cart icon  */}
                <FiShoppingCart className='text-3xl' />
            
            </div>
        </div>
    );
};

export default NavbarSM;