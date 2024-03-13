import React from 'react';
import { VscThreeBars } from "react-icons/vsc";
import { IoIosArrowDown } from "react-icons/io";

const LowerNav = () => {
    return (
        <div className=' w-full bg-[#fffaea]'>

            <div className=' mx-auto w-[96vw] py-5'>

                {/* Category button  ==============================*/}
                <button className=' bg-[#fac250] flex justify-between items-center px-8 py-3 rounded'>
                    <VscThreeBars />
                    <span className=' mx-3 font-semibold'>CATEGORIES</span>
                    <IoIosArrowDown />
                </button>

            </div>

        </div>
    );
};

export default LowerNav;