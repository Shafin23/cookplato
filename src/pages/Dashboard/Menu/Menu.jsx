import React from 'react';
import { Link } from 'react-router-dom';

const Menu = ({ setOption, option }) => {
    return (
        <div className=' w-[25vw] border border-dashed rounded min-h-[30vw] h-auto '>
            <h1 className=' text-center font-bold text-3xl py-6  bg-slate-50'>Admin</h1>

            <ul className=' w-full'>
                <li
                    onClick={() => setOption("pending")}
                    className={option === "pending" ? 'w-full text-center py-5 border-b cursor-pointer bg-amber-50 transition-all' : 'w-full text-center py-5 border-b cursor-pointer hover:bg-amber-50 transition-all'} >Pending Cook</li>

                <li
                    onClick={() => setOption("approved")}
                    className={option === "approved" ? 'w-full text-center py-5 border-b cursor-pointer bg-amber-50 transition-all' : 'w-full text-center py-5 border-b cursor-pointer hover:bg-amber-50 transition-all'}
                >Approved Cook</li>
            </ul>
        </div>
    );
};

export default Menu;