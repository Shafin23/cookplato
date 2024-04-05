import React, { useState } from 'react';
import { IoFilterSharp } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { BsGrid3X3 } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import DishCardCols from './DishCard/DishCardCols';
import DishCardRows from './DishCard/DishCardRows';
import { MdToggleOn } from "react-icons/md";


const DishesList = () => {

    const [grid, setGrid] = useState(true)

    const handelGridRow = (val) => {
        setGrid(true)
     }
     const handelGridCol = (val) => {
        setGrid(false)
     }
     
    console.log(grid);
    
    const data = [1,2,3,4,5]
    return (
        <div className='w-[70%] mx-auto'>
            <div className='bg-slate-50 px-10 py-6 mt-10 mb-10 flex justify-between items-center'>
               <div className='text-gray-400'>
               Total cook showing: 5
               </div>

               <div className='flex justify-center items-center gap-5'>
                <div className='bg-[#fab258] font-bold px-5 py-2 rounded-sm flex justify-center items-center gap-2'>
                    <div className='text-white'><IoFilterSharp /></div>
                    <div>Filter</div>
                    </div>
                <div className='flex justify-center items-center gap-8 border px-5 py-2 rounded-sm'> 
                    short by
                    <div className=' flex justify-around items-center'>
                        <div>Latest</div>
                        <div><IoIosArrowDown /></div>
                    </div>
                </div>
                <div className='flex justify-center items-center gap-3 text-xl'>
                
                    <div className='text-[#fab258]' onClick={() => handelGridRow('grid')}><BsGrid3X3 /></div>
                    <div className='text-gray-400' onClick={() => handelGridCol('col')}><RxHamburgerMenu /></div>
                </div>
               </div>
            </div>
            {/* filtering option */}


            <div className='bg-slate-50 px-10 py-6 mt-10 mb-10 flex justify-between items-center'>
            <div className='w-full'>
            <input className="border-slate-300 w-full border p-2 rounded-sm placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500"/>
            <div className='flex justify-between items-center mt-4 font-semibold'>
                <div className='flex justify-center items-center gap-2'><span>Featured:</span> <span className='text-gray-300 text-5xl'><MdToggleOn /></span> </div>
                <div className='flex justify-center items-center gap-2'><span>Open Now:</span> <span className='text-gray-300 text-5xl'><MdToggleOn /></span></div>
                <div className='flex justify-center items-center gap-2'><span>Rating:</span> <span className='text-gray-300 text-5xl'><MdToggleOn /></span></div>
            </div>
            <div className='flex justify-end items-end mt-3 px-6 py-2 rounded-sm text-white bg-[#fab258] w-20'>apply</div>
            </div>
            </div>

            {/* card component */}

            {
            grid == true ? 
            <div className='grid grid-cols-3 text-center gap-10 mb-14'>
            {
            data.map(card => <div key={card.index}> <DishCardCols/> </div> )
            }
            
            </div>
            : 
            <div className='grid grid-rows-1 text-center gap-10 mb-14'>
            {
            data.map(card => <div key={card.index}> <DishCardRows/> </div> )
            }
            
            </div>
            }

            



           
            

             
        </div>

    );
};

export default DishesList;