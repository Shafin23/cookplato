import React from 'react';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import { Outlet } from 'react-router-dom';
import NavbarSM from './NavbarSM/NavbarSM';

const SinglePage = () => {
    return (
        <div>
            <Navbar/>
            <NavbarSM/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default SinglePage;