import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CiSearch } from "react-icons/ci";
import { VscAccount } from "react-icons/vsc";
import { CiHeart } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";
import { authContext } from '../../../../components/AuthProvider/AuthProvider';
import { getAuth, signOut } from "firebase/auth";
import { app } from '../../../../../firebase.config';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UpperNav = () => {
    const auth = getAuth(app);
    const { userData, setUserData, loggedInUsersRole } = useContext(authContext);
    const navigate = useNavigate();
    const [showList, setShowList] = useState(false);

    const handleLogout = () => {
        signOut(auth)
            .then(() => {
                setUserData(null);
                toast.success("Logout successful");
            })
            .catch((error) => {
                toast.error(error.message);
            });
    };

    return (
        <div className='w-full bg-[#fffaea] py-10 border-b'>
            <div className='w-[96vw] mx-auto flex justify-between items-center'>
                <div className='flex justify-start items-center w-8/12'>
                    <Link to="/">
                        <img
                            className='w-56'
                            src="/public/assets/images/logo.webp"
                            alt="Logo"
                        />
                    </Link>
                    <div className='flex justify-between items-center bg-gray-100 ms-6 px-5 py-4 rounded w-7/12'>
                        <input
                            type="text"
                            placeholder="I'm looking for..."
                            className='w-10/12 focus:outline-none bg-transparent text-sm'
                        />
                        <div className='w-2/12 flex justify-end items-center'>
                            <CiSearch className='text-xl' />
                        </div>
                    </div>
                </div>
                <div className='flex justify-between items-center w-2/12 relative'>
                    <VscAccount
                        onClick={() => {
                            if (!userData) {
                                navigate("/account");
                            } else {
                                setShowList(!showList);
                            }
                        }}
                        className='text-2xl cursor-pointer hover:scale-110 transition-all relative'
                    />
                    <ul
                        className={`absolute px-7 py-6 border-2 bg-slate-50 w-64 rounded transition-all duration-300 ${showList ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                        style={{ left: '-200px', bottom: '-240px' }}
                        onMouseEnter={() => setShowList(true)}
                        onMouseLeave={() => setShowList(false)}
                    >
                        <li className='text-xl font-bold mb-3 pb-2 text-gray-900'>Account</li>
                        <li className=' hover:text-amber-400 transition-all cursor-pointer text-start border-b mb-2 pb-2 text-gray-900'><Link to={loggedInUsersRole === "cook" && "inbox"}> {loggedInUsersRole === "cook" && "Inbox"} </Link></li>
                        <li className=' hover:text-amber-400 transition-all cursor-pointer text-start text-gray-900 border-b pb-2 mb-2'><Link to="/dashboard">Dashboard</Link></li>
                        <li className={loggedInUsersRole !== "cook" ? "hidden" : ' hover:text-amber-400 transition-all cursor-pointer text-start border-b mb-2 pb-2 text-gray-900'} ><Link to="update_profile"> orders  </Link></li>
                        <li className={loggedInUsersRole !== "cook" ? "hidden" : ' hover:text-amber-400 transition-all cursor-pointer text-start border-b mb-2 pb-2 text-gray-900'} ><Link to="update_profile"> Adresses  </Link></li>
                        <li className={loggedInUsersRole !== "cook" ? "hidden" : ' hover:text-amber-400 transition-all cursor-pointer text-start border-b mb-2 pb-2 text-gray-900'} ><Link to="update_profile"> Payment Methods </Link></li>
                        <li className={loggedInUsersRole !== "cook" ? "hidden" : ' hover:text-amber-400 transition-all cursor-pointer text-start border-b mb-2 pb-2 text-gray-900'} ><Link to="update_profile"> Returns & Refunds  </Link></li>
                        <li className=' hover:text-amber-400 transition-all cursor-pointer text-start border-b mb-2 pb-2 text-gray-900' ><Link to="/my_account"> Account Details  </Link></li>
                        <li className={loggedInUsersRole !== "cook" ? "hidden" : ' hover:text-amber-400 transition-all cursor-pointer text-start border-b mb-2 pb-2 text-gray-900'} ><Link to="/update_profile"> update profile  </Link></li>
                        <li onClick={handleLogout} className=' hover:text-amber-400 transition-all cursor-pointer text-start text-gray-900'><Link to="/">Logout</Link></li>
                    </ul>
                    <CiHeart
                        className={`${loggedInUsersRole !== "customer" ? "hidden" : 'text-3xl cursor-pointer hover:scale-110 transition-all'}`}
                    />
                    <FiShoppingCart
                        className={`${loggedInUsersRole !== "customer" ? "hidden" : 'text-2xl cursor-pointer hover:scale-110 transition-all'}`}
                    />
                    <div>
                        <p className='text-sm text-gray-600'>Your Cart</p>
                        <p className='font-semibold'>0,00 lei</p>
                    </div>
                </div>
            </div>
            <ToastContainer position="bottom-right" />{/* Add toast container */}
        </div>
    );
};

export default UpperNav;
