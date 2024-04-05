import React from 'react';
import cdImg from '../../../../public/assets/New folder/card1.webp'
import { HiOutlineBuildingStorefront } from "react-icons/hi2";
import { RiUserAddFill } from "react-icons/ri";
const DishCardRows = () => {
    return (
        <div>
           <div className='border flex justify-between items-center'> 
                <div className='flex gap-6'>
                <div> <img src={cdImg} alt="" className=' h-36'/></div>
                <div className='flex gap-3 justify-center items-center'>
                     <div className='w-20 h-20 flex justify-center items-start'><img src={cdImg} alt="" /></div>
                     <div>
                     <div className='text-start flex flex-col'>
                        <h2 className='font-bold'>nicolai</h2>
                        <span>bucarest,</span>
                        <span>București, Romania</span>
                     </div>
                     </div>
                </div>
                </div>
                <div>
                <div className='flex flex-col gap-5  text-white font-semibold pr-14'>
                    <div className='bg-[#fab258] rounded-sm py-1 px-2 flex justify-center items-center gap-2'> <span><HiOutlineBuildingStorefront /></span> <span>Visite Cook</span></div>
                    <div className='bg-[#fab258] rounded-sm py-1 px-2 flex justify-center items-center gap-2'> <span><RiUserAddFill /></span> <span>Visite Cook</span></div>
                </div>
                </div>
           </div>
           
        </div>
    );
};

export default DishCardRows;