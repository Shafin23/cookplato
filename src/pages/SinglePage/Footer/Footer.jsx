import React, { useState } from 'react';

const Footer = () => {


    return (
        <footer className="footer grid grid-rows-4 md:grid-rows-1 grid-cols-1 md:grid-cols-4 gap-3 px-10 py-28 bg-white  border-y text-base-content">

            <aside>
                <h1 className=' text-xl footer-title font-semibold text-gray-900 mb-4'>Cook Plato</h1>
                <p className=' text-base text-gray-600'>Cook plato is a platform for cooks and <br /> hosts to meet </p>
            </aside>
            <nav>
                <h6 className="footer-title text-xl">Useful Links</h6>
                <a className="link link-hover text-base text-gray-700">List of dishes</a>
                <a className="link link-hover text-base text-gray-700">Become a cook</a>
                <a className="link link-hover text-base text-gray-700">About us</a>
                <a className="link link-hover text-base text-gray-700">FAQ</a>
                <a className="link link-hover text-base text-gray-700">Registration/Login</a>
            </nav>
            <nav>
                <h6 className="footer-title text-xl">Help Center</h6>
                <a className="link link-hover text-base text-gray-700">Contact Us</a>
                <a className="link link-hover text-base text-gray-700">About Us</a>
            </nav>
            <aside>
                <h1 className=' text-xl footer-title font-semibold text-gray-700 mb-4'>Cook</h1>
                <p className=' mb-7 text-base text-gray-600'>Embark on your culinary journey: Become a cook or host with CookPlato</p>


                <p className='text-base text-gray-600'>created by dodbyte</p>
            </aside>
        </footer>
    );
};

export default Footer;