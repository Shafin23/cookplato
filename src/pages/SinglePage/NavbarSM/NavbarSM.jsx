import React, { useState } from 'react';
import { VscThreeBars } from "react-icons/vsc";
import { IoIosSearch } from "react-icons/io";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from 'react-router-dom';
import Menu from './Menu/Menu';

const NavbarSM = () => {
    const [isClicked, setIsClicked] = useState(false);
    return (
        <div className=' z-20 py-3 border-b w-11/12 mx-auto flex justify-between items-center md:hidden'>
            <Menu isClicked={isClicked} setIsClicked={setIsClicked} />

            {/* three bar menu icons --------------------------------  */}
            <VscThreeBars onClick={() => setIsClicked(!isClicked)} className=' text-9xl' />

            {/* logo ----------------------------------- */}
            <div><Link to="/" className=' flex justify-center items-center'><img src="/assets/images/logo.webp" className=' w-8/12' alt="" /></Link></div>

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