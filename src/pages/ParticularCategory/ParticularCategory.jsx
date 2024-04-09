import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Card from '../UserProfile/MenuCardContainer/Card/Card';

const ParticularCategory = () => {
    const { categoryName } = useParams();
    const [dishes, setDishes] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Fetch dishes based on the category name
        fetch("http://localhost:5000/getAllUsers/dishes")
            .then(response => response.json())
            .then(data => {
                console.log(data[0].category)
                const categoryWiseCollection = data?.filter(item => item.category === categoryName);
                setDishes(categoryWiseCollection);
                setIsLoading(false); // Set loading to false after fetching data
            })
            .catch(error => console.error('Error fetching dishes:', error));
    }, [categoryName]);

    return (
        <div className='mx-auto w-11/12 py-20'>
            <h1 className='text-4xl font-bold mb-10'>Dishes in {categoryName}</h1>
            {isLoading ? (
                <div className=' w-full h-52 flex justify-center items-center'>
                    <span className="loading loading-spinner text-warning w-20"></span>
                </div> // DaisyUI spinner while loading
            ) : dishes.length === 0 ? (
                <p>No items available</p> // Display "No items available" message when dishes array is empty
            ) : (
                <div className='w-full grid grid-cols-1 md:grid-cols-3 gap-4'>
                    {dishes.map((dish, index) => (
                        <Card
                            key={dish?._id}
                            img={dish?.img}
                            name={dish?.dish}
                            price={dish?.dishPrice}
                            category={dish?.category}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default ParticularCategory;
