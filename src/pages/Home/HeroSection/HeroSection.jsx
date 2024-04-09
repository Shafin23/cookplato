import React from 'react';
import Carousel from './Carouserl/Carousel';
import Board from './Board/Board';

const HeroSection = () => {
    return (
        <div className='w-[75svw] mx-auto flex flex-col lg:flex-row gap-8'>
            <Carousel />
            <Board />
        </div>
    );
};

export default HeroSection;