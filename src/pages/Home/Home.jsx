import React from 'react';
import HeroSection from './HeroSection/HeroSection';
import HowDoesItWork from './HowDoesItWork/HowDoesItWork';
import BrowseByCategory from './BrowseByCategory/BrowseByCategory';
import Favourite from './Favourite/Favourite';

const Home = () => {
    return (
        <div>
            <HeroSection />
            <HowDoesItWork/>
            <BrowseByCategory/>
            <Favourite/>
        </div>
    );
};

export default Home;