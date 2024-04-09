import React, { useContext, useEffect, useState } from 'react';
import { BiCurrentLocation } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CookCard from './CookCard/CookCard';
import { useNavigate } from 'react-router-dom';
import { authContext } from '../../../components/AuthProvider/AuthProvider';



const Favourite = () => {
    const { allcooks, userData } = useContext(authContext);
    const navigate = useNavigate();

    const [selectedCategory, setSelectedCategory] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [isLoading, setIsLoading] = useState(true); // State to track loading status

    const handlePersonalProfile = (id) => {
        if (!userData) {
        
            navigate("/account")
        }
        else {
            navigate(`/profile/${id}`);
        }
    }

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    }

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    }

    useEffect(() => {
        // Simulate loading delay with setTimeout
        const timer = setTimeout(() => {
            setIsLoading(false); // Set loading to false after 1 second (simulating API fetch)
        }, 1000);

        return () => clearTimeout(timer); // Cleanup timer on unmount
    }, []); // Run only once on component mount

    const filteredCooks = allcooks?.filter(cook => {
        if (selectedCategory && cook.dishes.some(dish => dish.category === selectedCategory)) {
            return true; // If selected category matches and exists, include the cook
        }
        if (searchTerm && cook.dishes.some(dish => dish.dish.toLowerCase().includes(searchTerm.toLowerCase()))) {
            return true; // If search term matches any dish name, include the cook
        }
        return !selectedCategory && !searchTerm; // If no category selected and no search term, include the cook
    });

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 575 },
            items: 2,
            slidesToSlide: 2
        },
        mobile: {
            breakpoint: { max: 575, min: 0 },
            items: 1,
            slidesToSlide: 1
        }
    };

    return (
        <div className='mx-auto w-[90vw] pb-20'>

            

            <div>
                <h1 className='text-5xl font-normal mb-7'>Find your favourite food or cook</h1>

                <div className='mb-20 grid grid-cols-1 grid-rows-4 md:grid-rows-1 md:grid-cols-4 gap-8'>
                    <div className="flex items-center border border-gray-300">
                        <input
                            type="text"
                            placeholder="Search Menu"
                            className="w-full px-3 py-2 rounded-sm focus:outline-none"
                            onChange={handleSearch}
                        />
                        <button className="flex items-center rounded-sm px-4 h-full bg-gray-200 text-sm text-gray-700">
                            Menu
                        </button>
                    </div>

                    <div className="flex items-center border border-gray-300">
                        <input
                            type="text"
                            placeholder="Location"
                            className="w-full px-3 py-2 focus:outline-none"
                        />
                        <button className="flex items-center px-4 py-2 text-sm text-gray-700">
                            <BiCurrentLocation className='text-xl' />
                        </button>
                    </div>

                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="px-3 py-3 w-full border border-gray-300 text-gray-500 flex justify-between items-center"><span>Search a category</span> <IoIosArrowDown /></div>
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 w-52">
                            <li><button onClick={() => handleCategoryChange(null)}>All</button></li>
                            <li><button onClick={() => handleCategoryChange("Appetizers")}>Appetizers</button></li>
                            <li><button onClick={() => handleCategoryChange("Pasta")}>Pasta</button></li>
                            <li><button onClick={() => handleCategoryChange("Dessert")}>Dessert</button></li>
                            <li><button onClick={() => handleCategoryChange("Meat Preperations")}>Meat Preperations</button></li>
                            <li><button onClick={() => handleCategoryChange("Fish and Seafood")}>Fish and Seafood</button></li>
                            <li><button onClick={() => handleCategoryChange("Supe")}>Supe</button></li>
                            <li><button onClick={() => handleCategoryChange("Dough Delights")}>Dough Delights</button></li>
                            <li><button onClick={() => handleCategoryChange("other")}>other</button></li>
                            <li><button onClick={() => handleCategoryChange("BBQ")}>BBQ</button></li>
                            <li><button onClick={() => handleCategoryChange("Traditional Food")}>Tradistional Food</button></li>
                        </ul>
                    </div>

                    <button className="flex btn justify-center items-center w-full py-3 hover:bg-red-500 hover:text-white bg-gray-200 rounded text-gray-700">
                        Search
                    </button>
                </div>

                {isLoading ? (
                    <div className=' w-full h-52 flex justify-center items-center'>
                        <span className="loading loading-spinner text-warning w-20"></span>
                    </div> // DaisyUI spinner while loading
                    // Render the Spinner component while loading
                ) : (
                    <Carousel
                        draggable={true}
                        responsive={responsive}
                        keyboardControl={true}
                        infinite={true}
                        autoPlay={true}
                        autoPlaySpeed={2000}
                        removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
                    >
                        {filteredCooks.map(item => (
                            <div key={item._id} className="card me-0 md:me-8 bg-base-100 shadow-xl rounded-none my-10">
                                <figure>
                                    <img
                                        src={item.img ? item.img : "https://fthmb.tqn.com/9rZHSD5NamhEcFVp1JK1vyvM-Yo=/2122x1416/filters:fill(auto,1)/GettyImages-480379734-56b09b8b3df78cf772cffe77.jpg"}
                                        alt="Cook"
                                        className='w-full h-72'
                                    />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title">{item.first_name ? item.first_name + item.last_name : "Name is missing"}</h2>
                                    <p className='border-b pb-6 mb-6'>{item.description ? `${item.description.slice(0, 20)} .....` : "Description is missing"}</p>
                                    <div className="card-actions flex justify-between items-center">
                                        <button onClick={() => handlePersonalProfile(item._id)} className="btn rounded-md bg-amber-400 hover:bg-amber-500 transition-all duration-300 w-[45%]">Visit</button>
                                        <button className="btn w-[45%] rounded-md transition-all">Follow</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Carousel>
                )}
            </div>
        </div>
    );
};

export default Favourite;
