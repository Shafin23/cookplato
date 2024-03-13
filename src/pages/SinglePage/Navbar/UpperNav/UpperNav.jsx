import React from 'react';
import { Link } from 'react-router-dom';
import { CiSearch } from "react-icons/ci";
import { VscAccount } from "react-icons/vsc";
import { CiHeart } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";


const UpperNav = () => {
    return (

        <div className=' w-full bg-[#fffaea] py-10 border-b'>

            <div className=' w-[96vw] mx-auto flex justify-between items-center'>

                {/* logo and searchbar --------------------- */}
                <div className=' flex justify-start items-center w-8/12'>
                    {/* logo */}
                    <Link>
                        <img
                            className=' w-56'
                            src="/public/assets/images/logo.webp"
                            alt=""
                        /></Link>

                    {/* searchbar */}
                    <div className=' flex justify-between items-center bg-gray-100 ms-6 px-5 py-4 rounded  w-7/12'>
                        <input
                            type="text"
                            placeholder="I'm looking for..."
                            className='w-10/12 focus:outline-none bg-transparent text-sm '
                        />
                        <div className=' w-2/12 flex justify-end items-center'><CiSearch className=' text-xl' /></div> {/* search icon */}
                    </div>

                </div>



                {/* account icon, wish list icon, cart icon ----------------------------------*/}
                <div className=' flex justify-evenly items-center w-3/12'>
                    <VscAccount className=' text-2xl cursor-pointer hover:scale-110 transition-all' />
                    <CiHeart className=' text-3xl cursor-pointer hover:scale-110 transition-all' />
                    <FiShoppingCart className=' text-2xl cursor-pointer hover:scale-110 transition-all'/>

                    <div >
                        <p className=' text-sm text-gray-600'>Your Cart</p>
                        <p className=' font-semibold'>0,00 lei</p>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default UpperNav;