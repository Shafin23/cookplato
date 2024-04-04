import React from 'react';
import Carousel from './Carouserl/Carousel';
import Board from './Board/Board';

const HeroSection = () => {
    return (
        <div className='w-[95vw] mx-auto flex flex-col lg:flex-row justify-between items-start py-12'>
            <Carousel />
            <Board />
        </div>
    );
};

export default HeroSection;