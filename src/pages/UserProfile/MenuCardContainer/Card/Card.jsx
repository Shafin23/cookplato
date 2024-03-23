import React, { useState } from 'react';

const Card = () => {
    const [counter, setCounter] = useState(0);
    const [selectedDate, setSelectedDate] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentStep, setCurrentStep] = useState(0);
    const [userAnswers, setUserAnswers] = useState([]);

    // Function to handle incrementing counter
    const incrementCounter = () => {
        setCounter(prevCounter => prevCounter + 1);
    };

    // Function to handle decrementing counter
    const decrementCounter = () => {
        setCounter(prevCounter => (prevCounter > 0 ? prevCounter - 1 : 0));
    };

    // Function to handle date selection
    const handleDateChange = (event) => {
        setSelectedDate(event.target.value);
    };

    // Function to open modal
    const openModal = () => {
        setIsModalOpen(true);
    };

    // Function to close modal
    const closeModal = () => {
        setIsModalOpen(false);
    };

    // Function to handle user answer submission
    const handleAnswerSubmit = (answer) => {
        setUserAnswers(prevAnswers => [...prevAnswers, answer]);
        setCurrentStep(prevStep => prevStep + 1);
    };

    // Function to handle booking
    const handleBooking = () => {
        openModal();
    };

    // Function to handle confirm booking
    const confirmBooking = () => {
        // Implement booking logic here
        console.log('Booking confirmed');
        closeModal();
    };

    return (
        <div className='w-full h-auto border rounded-lg p-6'>
            {/* Image Slider (Replace 'imgSrc' with actual image source) */}
            <img src="https://magazine.foodpanda.com.bd/wp-content/uploads/sites/20/2021/05/Kacchi-Bashmoti-for-5-1024x749.jpg" alt="Slider" className="w-full" />

            {/* Counter */}
            <div className="flex items-center justify-between mt-4">
                <button className=' btn btn-sm bg-amber-300 py-2 px-5 hover:bg-amber-500' onClick={decrementCounter}>-</button>
                <span className=' text-3xl font-semibold'>{counter}</span>
                <button className=' btn btn-sm bg-amber-300 py-2 px-5 hover:bg-amber-500' onClick={incrementCounter}>+</button>
            </div>

            {/* Date Selector */}
            <div className="mt-4">
                <p className='text-lg font-medium'>Select date:</p>
                <input className='text-lg font-medium  focus:outline-none' type="date" value={selectedDate} onChange={handleDateChange} />
            </div>

            {/* Book Button */}
            <div className="mt-4">
                <button className=' text-lg font-semibold btn bg-amber-400 hover:bg-amber-500 transition-all w-full' onClick={handleBooking}>Book</button>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white p-6 w-10/12  h-4/6 rounded-lg">
                        {currentStep < 6 ? (
                            <div className=' h-full flex flex-col justify-between items-center'>
                                <p>Question {currentStep + 1}</p>
                                {/* Render your question component here */}
                                {/* For simplicity, I'm using a text input */}
                                <input type="text" onChange={(e) => handleAnswerSubmit(e.target.value)} />

                                {/*  next button or cancel button-------------------------------------------- */}
                                <div className=' w-full flex justify-between items-center'>
                                    <button className="bg-red-500 btn-sm text-white px-4 py-3 flex justify-center items-center rounded-lg" onClick={closeModal}>Cancel</button>

                                    <button className="bg-blue-500 text-white px-4 py-2 rounded-lg flex justify-center items-center btn-sm" onClick={() => setCurrentStep(prevStep => prevStep + 1)}>Next</button>
                                </div>
                            </div>
                        ) : (
                            <div className=' h-full flex flex-col justify-between items-center'>
                                <p>You have answered all questions. Confirm booking?</p>
                                <div className="flex justify-between mt-4">
                                   
                                    <button className="bg-green-500 text-white px-4 py-2 rounded-lg" onClick={confirmBooking}>Confirm Booking</button>
                                   
                                    <button className="bg-red-500 text-white px-4 py-2 rounded-lg" onClick={closeModal}>Cancel</button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Card;
