import React from 'react';
import Profile from '../Profile/Profile';

const UpperSection = ({id}) => {
    return (
        <div className=" flex flex-col md:flex-row justify-between items-center w-full mb-4 border-b-4 border-dashed pb-4">
            {/* google map --------------------------------- */}
            <div className='w-[30vw] h-52 flex justify-center items-center rounded-lg bg-pink-200'>
                <h1 className=' text-3xl font-semibold'>Googole Map</h1>
            </div>
            {/* ============================================ */}

            {/* User Profile section and price section ----------------------------------*/}
            <div className=' w-[70vw]'>
                <Profile id={id} />
            </div>
            {/* ========================================================================== */}
        </div>
    );
};

export default UpperSection;