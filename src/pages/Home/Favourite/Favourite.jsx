import React, { useEffect, useState } from 'react';
import { BiCurrentLocation } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CookCard from './CookCard/CookCard';
import { useNavigate } from 'react-router-dom';


const Favourite = () => {

    const [allCook, setAllCook] = useState([]);
    const navigate = useNavigate();

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
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


    // getting all data from server --------------------------------------
    useEffect(() => {
        fetch("http://localhost:3000/getAllCooks")
            .then(response => response.json())
            .then(data => setAllCook(data))
    }, [])

    const handlePersonalProfile = (id) => {
        navigate(`/profile/${id}`)
    }

    return (
        <div className=' mx-auto w-[90vw]'>
            <div>
                <h1 className=' text-5xl font-normal  mb-7 '>Find your favourite food or cook</h1>

                {/* search , location , filter section ------------------------------------------ */}
                <div className=' mb-20 grid grid-cols-1 grid-rows-4 md:grid-rows-1 md:grid-cols-4 gap-8'>

                    {/* search field =========================*/}
                    <div className="flex items-center border border-gray-300 ">
                        <input
                            type="text"
                            placeholder="Search Menu"
                            className="w-full px-3 py-2 rounded-sm  focus:outline-none"
                        />
                        <button className="flex items-center rounded-sm px-4 h-full bg-gray-200 text-sm text-gray-700">
                            Menu
                        </button>
                    </div>


                    {/* location field ============================ */}
                    <div className="flex items-center border border-gray-300">
                        <input
                            type="text"
                            placeholder="Location"
                            className="w-full px-3 py-2  focus:outline-none"
                        />
                        <button className="flex items-center px-4 py-2  text-sm text-gray-700">
                            <BiCurrentLocation className=' text-xl' />
                        </button>
                    </div>


                    {/* Dropdown field ============================ */}
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className=" px-3 py-3 w-full border border-gray-300 text-gray-500  flex justify-between items-center"><span>Search a category</span> <IoIosArrowDown /></div>
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100  w-52">
                            <li><a href="/">Appetizers</a></li>
                            <li><a href="/">other</a></li>
                            <li><a href="/">Pasta</a></li>
                            <li><a href="/">Dsert</a></li>
                            <li><a href="/">Meat Preperations</a></li>
                            <li><a href="/">Fish and Seafood</a></li>
                            <li><a href="/">Supe</a></li>
                            <li><a href="/">Vegan</a></li>
                            <li><a href="/">Dough Delights</a></li>
                            <li><a href="/">other</a></li>
                            <li><a href="/">BBQ</a></li>
                            <li><a href="/">Traditional Food</a></li>

                        </ul>
                    </div>


                    {/* search field */}
                    <button className="flex btn justify-center items-center w-full py-3 hover:bg-red-500 hover:text-white bg-gray-200 rounded  text-gray-700">
                        Search
                    </button>


                </div>

                {/* card slider section -------------------------------- */}
                <Carousel
                    draggable={true}
                    responsive={responsive}
                    keyboardControl={true}
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={2000}
                    removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
                >
                    {allCook?.map(item => <div className="card  me-8 bg-base-100 shadow-xl rounded-none my-10">
                        <figure>
                            <img
                                src={item.img ? item.img : "https://fthmb.tqn.com/9rZHSD5NamhEcFVp1JK1vyvM-Yo=/2122x1416/filters:fill(auto,1)/GettyImages-480379734-56b09b8b3df78cf772cffe77.jpg"}
                                alt="Shoes"
                            />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{item.first_name ? item.first_name + item.last_name : "name is missing"}</h2>
                            <p className=' border-b pb-6 mb-6'>{item.description ? item.description : "description is missing"}</p>
                            <div className="card-actions flex justify-between items-center">
                                <button onClick={() => handlePersonalProfile(item._id)} className="btn w-[45%]">Visit</button>
                                <button className="btn w-[45%]">Follow</button>
                            </div>
                        </div>
                    </div>)}
                </Carousel>
            </div>
        </div>
    );
};

export default Favourite;
