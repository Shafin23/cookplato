import React, { useContext, useEffect, useState } from 'react';
import { VscThreeBars } from "react-icons/vsc";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from 'react-router-dom';
import { authContext } from '../../../../components/AuthProvider/AuthProvider';

const LowerNav = () => {
    const { language } = useContext(authContext); // recieving state and function from authprovider through context api
    const [showList, setShowList] = useState(false) // when user hover on categories btn, then state become true and list will be seen

    return (
        <div className=' w-full bg-[#fffaea]'>

            <div className=' mx-auto w-[96vw] py-5 flex justify-between items-center'>

                {/* Category button  ==============================*/}
                <button
                    onClick={() => setShowList(!showList)}
                    className=' bg-[#fac250] flex justify-between items-center px-8 py-3 rounded relative'>
                    <VscThreeBars />
                    <span className=' mx-3 font-semibold'>CATEGORIES</span>
                    <IoIosArrowDown />

                    {/* ul --- when user hover the button then user will get to see the list */}
                    <ul
                        onMouseEnter={() => setShowList(true)}
                        // onMouseLeave={() => {
                        //     setTimeout(() => {
                        //         setShowList(false)
                        //     }, 2000);
                        // }}
                        className={showList ? 'z-50 top-14 left-0 absolute px-7 py-6 border-2 bg-slate-50 w-64 rounded' : "hidden"}>
                        <li className=' hover:text-amber-400 transition-all cursor-pointer text-start  border-b mb-2 pb-2 text-gray-900'><Link to="/">Appetizers</Link></li>
                        <li className=' hover:text-amber-400 transition-all cursor-pointer text-start  border-b mb-2 pb-2 text-gray-900'><Link to="/">other</Link></li>
                        <li className=' hover:text-amber-400 transition-all cursor-pointer text-start  border-b mb-2 pb-2 text-gray-900'><Link to="/">Pasta</Link></li>
                        <li className=' hover:text-amber-400 transition-all cursor-pointer text-start  border-b mb-2 pb-2 text-gray-900'><Link to="/">Dsert</Link></li>
                        <li className=' hover:text-amber-400 transition-all cursor-pointer text-start  border-b mb-2 pb-2 text-gray-900'><Link to="/">Meat Preperations</Link></li>
                        <li className=' hover:text-amber-400 transition-all cursor-pointer text-start  border-b mb-2 pb-2 text-gray-900'><Link to="/">Fish and Seafood</Link></li>
                        <li className=' hover:text-amber-400 transition-all cursor-pointer text-start  border-b mb-2 pb-2 text-gray-900'><Link to="/">Supe</Link></li>
                        <li className=' hover:text-amber-400 transition-all cursor-pointer text-start  border-b mb-2 pb-2 text-gray-900'><Link to="/">Vegan</Link></li>
                        <li className=' hover:text-amber-400 transition-all cursor-pointer text-start  border-b mb-2 pb-2 text-gray-900'><Link to="/">Dough Delights</Link></li>
                        <li className=' hover:text-amber-400 transition-all cursor-pointer text-start  border-b mb-2 pb-2 text-gray-900'><Link to="/">other</Link></li>
                        <li className=' hover:text-amber-400 transition-all cursor-pointer text-start  border-b mb-2 pb-2 text-gray-900'><Link to="/">BBQ</Link></li>
                        <li className=' hover:text-amber-400 transition-all cursor-pointer text-start  text-gray-900'><Link to="/">Traditional Food</Link></li>
                    </ul>
                </button>

                {/* list items ----- menu  ===========================*/}
                <ul className=' flex justify-between items-center w-5/12'>
                    <li className=' text-sm font-semibold cursor-pointer hover:text-amber-400 transition-all'><Link to="/">List of dishes</Link></li>
                    <li className=' text-sm font-semibold cursor-pointer hover:text-amber-400 transition-all'><Link to="/">Become a cook</Link></li>
                    <li className=' text-sm font-semibold cursor-pointer hover:text-amber-400 transition-all'><Link to="/">How it works</Link></li>
                    <li className=' text-sm font-semibold cursor-pointer hover:text-amber-400 transition-all'><Link to="/">About us</Link></li>
                    <li className=' text-sm font-semibold cursor-pointer hover:text-amber-400 transition-all'><Link to="/">Contact us</Link></li>
                    <li className=' text-sm font-semibold cursor-pointer hover:text-amber-400 transition-all'><Link to="/">FAQ</Link></li>
                </ul>

                {/*  recently viewed option ============================ */}
                <p className=' font-semibold cursor-pointer'>Recently viewed</p>
            </div>

        </div>
    );
};

export default LowerNav;