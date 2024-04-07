import React from 'react';
import { FaFacebookF } from "react-icons/fa6";
import { ImTwitter } from "react-icons/im";
import { FaYoutube,FaWifi } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";


const ContactUs = () => {
    return (
        <div className='flex-row md:flex justify-start items-start mx-auto w-full lg:w-4/5 gap-5 px-5 md:px-10 lg:px-5 py-16 xl:py-28 md:py-20 '>
            <div className='md:w-2/5'>
                <h3 className='text-xl md:text-3xl font-semibold pb-6 md:pb-14'>Informații de contact</h3>
                <div className='flex flex-col'>
                    <span className='pb-5 md:pb-10 text-xl md:text-2xl'>Location</span>
                    <span className=' pb-3 md:pb-5 font-bold text-gray-400'>Store</span>
                    <span className='pb-4 md:pb-10'>Bucaresti ,ROMANİA
                        <br />
                         info@cookplato.com
                    </span>
                </div>
                <div>
                    <h3 className='text-xl md:text-2xl'>Social</h3>
                    <div className='text-xl md:text-2xl text-gray-500 flex justify-start items-start gap-3 md:gap-5 pt-5 md:pt-10 '>
                    <ImTwitter />
                    <FaFacebookF />
                    <FaYoutube />
                    <FaWifi />
                    <FaLinkedin />
                    </div>
                </div>
            </div>
            <div className='w-full md:w-[70%]  md:border-l-2 ps-0 md:ps-24 pt-16 md:pt-0'>
            <h3 className='text-xl md:text-3xl font-semibold pb-5 md:pb-14'>Lasă-ne un mesaj</h3>
            <p>Required fields are marked *</p>
            <form action="">
                <input type="text" placeholder='Subject (optional)' className='border w-full p-3 rounded-sm mt-3'/>
                <textarea placeholder='Write your message here' className="border w-full p-3 rounded-sm mt-3 h-32"></textarea>
                <div className='flex-row md:flex gap-5'>
                <input type="text" placeholder='Your Name' className='border w-full p-3 rounded-sm mt-3'/>
                <input type="text" placeholder='Your Email' className='border w-full p-3 rounded-sm mt-3'/>
                </div>
                <input type="submit" value="Send message" className='bg-[#fab258] px-2 md:px-5 py-2 md:py-3 rounded-sm font-semibold mt-5'/>
            </form>

            </div>
        </div>
    );
};

export default ContactUs;