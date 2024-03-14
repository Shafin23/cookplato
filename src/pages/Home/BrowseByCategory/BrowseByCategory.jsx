import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import BrowseByCategoryCard from './BrowseByCategoryCard/BrowseByCategoryCard';

const BrowseByCategory = () => {

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 6,
            slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };

    return (
        <div className=' w-[95vw] mx-auto mt-16'>
            <div className=' flex justify-start items-center'>
                <h1 className=' text-4xl font-bold'>Browse by category</h1>
                <p className=' text-gray-600 ms-8 text-sm cursor-pointer hover:text-[#fac250] transition-all'>All Category </p>
            </div>
            <Carousel
                draggable={true}
                responsive={responsive}
                keyBoardControl={true}
                infinite={true}
                autoPlay={ true}
                autoPlaySpeed={2000}
                removeArrowOnDeviceType={["tablet", "mobile"]}
            >
                <BrowseByCategoryCard />
                <BrowseByCategoryCard />
                <BrowseByCategoryCard />
                <BrowseByCategoryCard />
                <BrowseByCategoryCard />
                <BrowseByCategoryCard />
                <BrowseByCategoryCard />
            </Carousel>;

        </div>
    );
};

export default BrowseByCategory;