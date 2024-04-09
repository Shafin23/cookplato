import React, { useContext, useEffect, useState } from 'react';
import Card from './Card/Card';

const MenuCardContainer = ({ id }) => {
    // state declaration of this component ---------------
    const [searchInput, setSearchInput] = useState("");
    const [dishes, setDishes] = useState([]);
    const [visitedCook, setVisitedCook] = useState(null);
    const [counter, setCounter] = useState(true);
    // ===================================================

    // Fetch data based on id ----------------------------
    useEffect(() => {
        const fetchData = () => {
            fetch(`http://localhost:5000/getAllUsers/userId/${id}`)
                .then(response => response.json())
                .then(data => setVisitedCook(data))
                .catch(error => console.error('Error fetching data:', error));
        };

        fetchData(); // Fetch data initially

        // Fetch data every 2 seconds continuously
        const interval = setInterval(fetchData, 2000);

        return () => clearInterval(interval); // Clear interval on unmount or re-render
    }, [id]);
    // ===================================================

    // Set the dishes state--------------
    useEffect(() => {
        if (visitedCook && visitedCook.dishes) {
            if (searchInput === "") {
                setDishes(visitedCook.dishes);
            } else {
                const newDishes = visitedCook.dishes.filter(item => item?.dish === searchInput);
                setDishes(newDishes);
            }
        }
    }, [searchInput, visitedCook]);
    // ==================================

    return (
        <div className='w-full pt-16'>
            <h1 className='text-4xl font-bold mb-5 text-gray-700'>All Available Menu: </h1>
            {/* Search menu by name ----------------------- */}
            <div className='mb-4'>
                <input type="text" placeholder='Search your menu' onChange={e => setSearchInput(e.target.value)} className='w-full py-3 px-4 rounded-xl border border-gray-300 focus:outline-none' />
            </div>
            {/* Render Cards ------------------------------- */}
            <div className='w-full grid grid-cols-1 md:grid-cols-3 gap-4'>
                {dishes?.map(card => (
                    <Card
                        key={card?._id}
                        img={card?.img}
                        name={card?.dish}
                        price={card?.dishPrice}
                        category={card?.category}
                    />
                ))}
            </div>
        </div>
    );
};

export default MenuCardContainer;
