import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import BrowseByCategoryCard from './BrowseByCategoryCard/BrowseByCategoryCard';

const BrowseByCategory = () => {

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 6,
            slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 575 },
            items: 2,
            slidesToSlide: 1 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 575, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };

    return (
        <div className=' w-[95vw] mx-auto mt-16'>
            <div className='flex flex-col md:flex-row justify-start items-center'>
                <h1 className=' text-4xl text-gray-800 font-bold'>Browse by category</h1>
                <p className=' mt-4 md:mt-0 text-gray-600 ms-0 md:ms-8 text-base md:text-sm cursor-pointer hover:text-[#fac250] transition-all'>All Category </p>
            </div>
            <Carousel
                draggable={true}
                responsive={responsive}
                keyBoardControl={true}
                infinite={true}
                autoPlay={ true}
                autoPlaySpeed={1500}
                removeArrowOnDeviceType={["tablet", "mobile"]}
            >
                <BrowseByCategoryCard img="/assets/images/category1.webp" title="Appetizers" />
                <BrowseByCategoryCard img="/assets/images/category2.webp" title="Dough DElights" />
                <BrowseByCategoryCard img="/assets/images/category3.webp" title="BBQ" />
                <BrowseByCategoryCard img="/assets/images/category4.webp" title="Traditional Food" />
                <BrowseByCategoryCard img="/assets/images/category5.webp" title="Other" />
                <BrowseByCategoryCard img="/assets/images/category6.webp" title="Meat Preparations" />
                <BrowseByCategoryCard img="/assets/images/category7.webp" title="Desert" />
                <BrowseByCategoryCard img="/assets/images/category8.webp" title="Fish & SeaFood" />
                <BrowseByCategoryCard img="/assets/images/category9.webp" title="Supe" />
                <BrowseByCategoryCard img="/assets/images/category10.webp" title="Pasta" />
                <BrowseByCategoryCard img="/assets/images/category11.webp" title="Vegan" />
            </Carousel>;

        </div>
    );
};

export default BrowseByCategory;