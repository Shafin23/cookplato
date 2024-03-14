import React from 'react';
import HeroSection from './HeroSection/HeroSection';
import HowDoesItWork from './HowDoesItWork/HowDoesItWork';
import BrowseByCategory from './BrowseByCategory/BrowseByCategory';

const Home = () => {
    return (
        <div>
            <HeroSection />
            <HowDoesItWork/>
            <BrowseByCategory/>
        </div>
    );
};

export default Home;