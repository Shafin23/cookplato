import React from 'react';
import { IoMdArrowBack } from "react-icons/io";
import { Link } from 'react-router-dom';

const Menu = ({isClicked, setIsClicked}) => {
    return (
        <div
            style={ {right: isClicked?"16vw":"100vw"}}
            className=' transition-all absolute bg-white top-0 w-10/12 min-h-full h-auto  block md:hidden z-50'>

            {/* top head -------- */}
            <div className=' bg-amber-500 flex justify-between items-center px-4 py-6'>
                <IoMdArrowBack className=' text-3xl' onClick={()=>setIsClicked(!isClicked)} />
                <h1 className=' text-xl font-semibold'>Login/Register</h1>
            </div>


            {/* list -------------------- */}
            <ul className=' w-full px-4 my-4'>
                <li className=' py-4 border-b font-semibold'><Link to="">LIST OF DISHES</Link></li>
                <li className=' py-4 border-b font-semibold'><Link to="">BECOME A COOK</Link></li>
                <li className=' py-4 border-b font-semibold'><Link to="">HOW IT WORKS</Link></li>
                <li className=' py-4 border-b font-semibold'><Link to="">ABOUT US</Link></li>
                <li className=' py-4 border-b font-semibold'><Link to="">CONTACT US</Link></li>
                <li className=' py-4 border-b font-semibold'><Link to="">FAQ</Link></li>
                <li className=' py-4 border-b font-semibold'><Link to="">DASHBOARD</Link></li>
            </ul>

        </div>
    );
};

export default Menu;