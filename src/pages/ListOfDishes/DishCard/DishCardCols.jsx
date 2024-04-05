import React from 'react';
import cdImg from '../../../../public/assets/New folder/card1.webp'
import { HiOutlineBuildingStorefront } from "react-icons/hi2";
import { RiUserAddFill } from "react-icons/ri";

const DishCardCols = () => {
    return (
        // grid cols
        <div>
           <div className='border'> 
                <div> <img src={cdImg} alt="" /></div>
                <div className='p-5'>

                <div className='flex gap-3'>
                     <div className='w-10 h-10'><img src={cdImg} alt="" /></div>
                     <div>
                     <div className='text-start flex flex-col'>
                        <h2 className='font-bold'>nicolai</h2>
                        <span>bucarest,</span>
                        <span>București, Romania</span>
                     </div>
                     </div>
                </div>
                <hr className='mt-5 mb-5'/>
                <div className='flex justify-center gap-10 text-white font-semibold'>
                    <div className='bg-[#fab258] w-2/4 rounded-sm py-1 flex justify-center items-center gap-2'> <span><HiOutlineBuildingStorefront /></span> <span>Visite Cook</span></div>
                    <div className='bg-[#fab258] w-2/4 rounded-sm py-1 flex justify-center items-center gap-2'> <span><RiUserAddFill /></span> <span>Follow</span></div>
                </div>
                </div>
           </div>
           
        </div>


    );
};

export default DishCardCols;