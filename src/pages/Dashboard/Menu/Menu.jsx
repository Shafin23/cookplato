import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { authContext } from '../../../components/AuthProvider/AuthProvider';

const Menu = ({ setOption, option }) => {
    const { userData } = useContext(authContext);
    const [loggedUser, setLoggedUser] = useState(null)

    console.log(userData)

    useEffect(() => {
        fetch(`https://cookplato-server.vercel.app/getAllUsers/email/${userData?.email}`)
            .then(response => response.json())
            .then(data => setLoggedUser(data))
    }, [userData])

    return (
        <div className=' w-[25vw] border border-dashed rounded min-h-[30vw] h-auto '>
            <h1 className=' text-center font-bold text-3xl py-6  bg-slate-50'>{loggedUser?.user?.userRole}</h1>

            {/* menu for admin---------------------------------------------------------------------- */}
            <ul className={loggedUser?.user?.userRole === "admin" ? 'w-full' : "hidden"} >
                <li
                    onClick={() => setOption("pending")}
                    className={option === "pending" ? 'w-full text-center py-5 border-b cursor-pointer bg-amber-50 transition-all' : 'w-full text-center py-5 border-b cursor-pointer hover:bg-amber-50 transition-all'} >Pending Cook</li>

                <li
                    onClick={() => setOption("approved")}
                    className={option === "approved" ? 'w-full text-center py-5 border-b cursor-pointer bg-amber-50 transition-all' : 'w-full text-center py-5 border-b cursor-pointer hover:bg-amber-50 transition-all'}
                >Approved Cook</li>
            </ul>
            {/* ====================================================================================== */}


            {/* menu for cook ------------------------------------------------------------------------- */}
            <ul className={loggedUser?.user?.userRole === "cook" ? 'w-full' : "hidden"} >
                <li
                    onClick={() => setOption("request")}
                    className={option === "request" ? 'w-full text-center py-5 border-b cursor-pointer bg-amber-50 transition-all' : 'w-full text-center py-5 border-b cursor-pointer hover:bg-amber-50 transition-all'} >Request for booking</li>

                <li
                    onClick={() => setOption("pending_booking")}
                    className={option === "pending_booking" ? 'w-full text-center py-5 border-b cursor-pointer bg-amber-50 transition-all' : 'w-full text-center py-5 border-b cursor-pointer hover:bg-amber-50 transition-all'}
                >Pending Booking</li>

                <li
                    onClick={() => setOption("confirm")}
                    className={option === "confirm" ? 'w-full text-center py-5 border-b cursor-pointer bg-amber-50 transition-all' : 'w-full text-center py-5 border-b cursor-pointer hover:bg-amber-50 transition-all'}
                >Confirm Booking</li>


                <li
                    onClick={() => setOption("get_paid")}
                    className={option === "get_paid" ? 'w-full text-center py-5 border-b cursor-pointer bg-amber-50 transition-all' : 'w-full text-center py-5 border-b cursor-pointer hover:bg-amber-50 transition-all'}
                >Get Paid</li>
            </ul>
            {/* ======================================================================================= */}


            {/* menu for customer------------------------------------- */}
            <ul className={loggedUser?.user?.userRole === "customer" ? 'w-full' : "hidden"} >
                <li
                    onClick={() => setOption("pending_payment")}
                    className={option === "pending_payment" ? 'w-full text-center py-5 border-b cursor-pointer bg-amber-50 transition-all' : 'w-full text-center py-5 border-b cursor-pointer hover:bg-amber-50 transition-all'} >Pending Booking</li>

                <li
                    onClick={() => setOption("confirm_payment")}
                    className={option === "confirm_payment" ? 'w-full text-center py-5 border-b cursor-pointer bg-amber-50 transition-all' : 'w-full text-center py-5 border-b cursor-pointer hover:bg-amber-50 transition-all'}
                >Confirm Payment</li>
            </ul>
            {/* ====================================================== */}
        </div>
    );
};

export default Menu;