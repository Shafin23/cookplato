import React from 'react';
import Lottie from "lottie-react";
import chef from '../../../public/assets/New folder/chef.json'

const UpdateIteam = ({imagePreview}) => {
    return (
       <div className='flex justify-end items-end'>
        <div className='mx-auto bg-white drop-shadow-md'>
            <div className='p-10 flex justify-center items-center flex-col gap-3'>
            <div className='flex justify-center items-center gap-3 w-full '>
            <div className='w-1/2'>
               <label  className="block mb-1 capitalize">Update tem name</label>
               <input type="text" className='border px-2 py-3 rounded-md w-full'/>
               </div>
               <div className='w-1/2'>
               <label  className="block mb-1 capitalize">  Update price</label>
               <input
                       type="file"
                       id="image"
                       className="w-full border px-3  rounded focus:outline-none py-2"
                   />
                   {imagePreview && (
                       <img src={imagePreview} alt="Preview" className="mt-2 w-full h-auto rounded" />
                   )}
               </div>
               
            </div>
            <div className='w-full flex flex-col '>
               <label  className="block mb-1 capitalize w-full" >  Update item catagory</label>
               <input type="text" className='border px-2 py-3 rounded-md w-full'/>
               </div>
               <div className='w-full'>
               <label  className="block mb-1 capitalize w-full">  Update Description</label>
               <textarea  placeholder='Description' name="" id="" cols="30" rows="4" className='border px-2 py-3 rounded-md w-full'></textarea>
               </div>
               <input type="submit" value="submit"  className=" bg-[#fbbf24] text-white w-full py-2 rounded-md"/>
            </div>
           
            </div>
            <div className='w-1/2'>
               
            <div className='w-3/4 relative'>
            <div className='text-3xl uppercase absolute top-48 z-10 font-semibold'>Update items <span className='text-[#fbbf24]'>details</span></div>
            <Lottie animationData={chef} loop={true} />
            </div>
            </div>
       </div>
    );
};

export default UpdateIteam;