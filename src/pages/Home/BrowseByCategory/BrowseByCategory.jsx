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
                <BrowseByCategoryCard img="/assets/images/category1.webp" title="Apetizers" />
                <BrowseByCategoryCard img="/assets/images/category2.webp" title="Dough DElights" />
                <BrowseByCategoryCard img="/assets/images/category3.webp" title="BBQ" />
                <BrowseByCategoryCard img="/assets/images/category4.webp" title="Traditional Food" />
                <BrowseByCategoryCard img="/assets/images/category5.webp" title="Other" />
                <BrowseByCategoryCard img="/assets/images/category6.webp" title="Meat Preperations" />
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