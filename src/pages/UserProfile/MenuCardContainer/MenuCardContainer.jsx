import React, { useContext, useEffect, useState } from 'react';
import Card from './Card/Card';


const MenuCardContainer = ({ id }) => {

    // state declaration of this component ---------------
    const [searchInput, setSearchInput] = useState("");
    const [dishes, setDishes] = useState([]);
    const [visitedCook, setVisitedCook] = useState(null);
    const [counter, setCounter] = useState(true);
    // ===================================================


    // fetch data based on id ----------------------------
    useEffect(() => {
        fetch(`http://localhost:3000/getAllUsers/${id}`)
            .then(response => response.json())
            .then(data => setVisitedCook(data))
    }, [])
    // ===================================================

    setTimeout(() => {
        setCounter(!counter)
    }, 1000);

    // set the dishes state--------------
    useEffect(() => {
        if (searchInput === "") {
            setDishes(visitedCook?.dishes)
        }
        else {
            const newDishes = visitedCook?.dishes?.filter(item => item?.dish === searchInput)
            setDishes(newDishes)
        }
    }, [searchInput, counter])
    // ==================================

    return (
        <div className=' w-full pt-16'>

            <h1 className=' text-4xl font-bold mb-5 text-gray-700'>All Available Menu: </h1>
            {/* =-============================================================----------------- */}

            {/* search menu by name ----------------------- */}
            <div className=' mb-4'>
                <input type="text" placeholder='Search your menu' onChange={e => setSearchInput(e.target.value)} className=' w-full py-3 px-4 rounded-xl border  border-gray-300 focus:outline-none' />
            </div>
            {/* =========================================== */}

            <div className=' w-full grid grid-cols-1 md:grid-cols-3 gap-4'>
                {dishes?.map(card => <Card
                    key={card?._id}
                    img={card?.img}
                    name={card?.dish}
                    price={card?.dishPrice}
                    category={card?.category}
                />)}
            </div>
        </div>
    );
};

export default MenuCardContainer;