import React, { useContext, useEffect, useState } from 'react';
import { authContext } from '../../../../components/AuthProvider/AuthProvider';

const Card = ({ name, price, category, img }) => {

    // Recieve state and function from authprovider though context api----------------
    const { userData } = useContext(authContext);
    // ===============================================================================

    // console.log(userData)
    // state declaration ---------------------------------
    const [counter, setCounter] = useState(0);
    const [selectedDate, setSelectedDate] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentStep, setCurrentStep] = useState(0);
    const [eventAddress, setEventAddress] = useState("");
    const [message, setMessage] = useState("");
    const [foodIssue, setFoodIssue] = useState("")
    const [bookingStatus, setBookingStatus] = useState("request")
    const [loggedUser, setLoggedUser] = useState(null);
    // ====================================================


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


    // Function to handle booking
    const handleBooking = () => {
        openModal();
    };

    // fetching logged user data from database -------------
    useEffect(() => {
        fetch(`https://cookplato-server.vercel.app/email/${userData?.email}`)
        .then(response=>response.json())
        .then(data=>setLoggedUser(data))
    }, [])
    // =====================================================



    // Function to handle confirm booking
    const confirmBooking = () => {
        // Implement booking logic here
        fetch("https://cookplato-server.vercel.app/requestBooking", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ img: loggedUser?.user?.img, email: loggedUser?.user?.email, display_name: loggedUser?.user?.display_name, total_amount: price * counter, eventAddress, selectedDate, message, foodIssue, bookingStatus, counter, dishImg: img, name, category, date: new Date(), customerEmail: userData?.email, cookEmail: loggedUser?.user?.email })
        })
            .then(response => response.json())
            .then(data => console.log(data))

            console.log( loggedUser?.user?.img,  loggedUser?.user?.email,  loggedUser?.user?.display_name, price * counter, eventAddress, selectedDate, message, foodIssue, bookingStatus, counter,  img, name, category, new Date(),  userData?.email, loggedUser?.user?.email)
        console.log('Booking confirmed');
        closeModal();


        // after confirm request of booking, make every state empty------------
        setCounter(0)
        setEventAddress("")
        setFoodIssue("")
        setMessage("")
        setSelectedDate("")
        setBookingStatus("")
        // =======================================================
    };

    return (
        <div className='w-full h-auto border rounded-lg p-6'>
            {/* Image Slider (Replace 'imgSrc' with actual image source)------------------ */}
            <img src={img ? img : "https://magazine.foodpanda.com.bd/wp-content/uploads/sites/20/2021/05/Kacchi-Bashmoti-for-5-1024x749.jpg"} alt="Slider" className="w-full" />
            {/* ========================================================================== */}

            {/* otehr details-------------- */}
            <div className=' w-full'>
                <div className=' flex justify-between items-center mt-4'>
                    <h1 className=' text-xl font-medium text-gray-600'>{name}</h1>
                    <p className=' text-xl font-medium text-gray-600'>${price}</p>
                </div>
                <p className=' text-sm text-gray-600'>{category}</p>
            </div>
            {/* =========================== */}


            {/* Book Button------------------------------------------------------- */}
            <div className="mt-4">
                <button className=' text-lg font-semibold btn bg-amber-400 hover:bg-amber-500 transition-all w-full' onClick={handleBooking}>Request to book</button>
            </div>
            {/* =================================================================== */}


            {/* Modal --------------------------------------------------------------------------------------- */}
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 ">
                    <div className="bg-white p-6 w-10/12  h-4/6 rounded-lg">
                        {currentStep < 5 ? (
                            <div className=' w-full h-full flex flex-col justify-between items-center'>

                                {/* Question : 1  - event address -------------------------------------------- */}
                                <div className={currentStep === 0 ? "block w-full h-4/6" : "hidden"}>

                                    {/* Question --------*/}
                                    <h1 className=' font-bold text-4xl text-gray-700 mb-5'>
                                        {currentStep + 1}.
                                        Write down the event address</h1>

                                    {/* answer ----------*/}
                                    <textarea className=' focus:outline-none p-3 border rounded-md w-full h-full' onChange={e => setEventAddress(e.target.value)} ></textarea>

                                </div>
                                {/* ========================================================================== */}

                                {/* Question : 2  - Food preferance ------------------------------------------ */}
                                <div className={currentStep === 1 ? "block w-full h-4/6" : "hidden"}>

                                    {/* Question --------*/}
                                    <h1 className=' font-bold text-3xl text-gray-700 mb-5'>
                                        {currentStep + 1}.
                                        Is there any health related issue with the food item?
                                        If yes, then write it.
                                    </h1>

                                    {/* answer ----------*/}
                                    <textarea className=' focus:outline-none p-3 border rounded-md w-full h-full' onChange={e => setFoodIssue(e.target.value)} ></textarea>

                                </div>
                                {/* ========================================================================== */}


                                {/* Question : 3  - Menu Count ------------------------------------------ */}
                                <div className={currentStep === 2 ? "block w-full h-4/6" : "hidden"}>

                                    {/* Question --------*/}
                                    <h1 className=' font-bold text-3xl text-gray-700 mb-5'>
                                        {currentStep + 1}.
                                        Menu price is {price}.
                                        How much do you want?
                                    </h1>

                                    {/* answer ----------*/}
                                    {/* Counter */}
                                    <div className="flex items-center justify-between mt-4">
                                        <button className=' btn btn-sm bg-amber-300 py-2 px-5 hover:bg-amber-500' onClick={decrementCounter}>-</button>
                                        <span className=' text-3xl font-semibold'>{counter}</span>
                                        <button className=' btn btn-sm bg-amber-300 py-2 px-5 hover:bg-amber-500' onClick={incrementCounter}>+</button>
                                    </div>
                                    <h1 className=' font-bold text-3xl text-gray-700 mb-5'>Total : {price * counter}$</h1>
                                </div>
                                {/* ========================================================================== */}

                                {/* Question : 4  - Select Date ------------------------------------------ */}
                                <div className={currentStep === 3 ? "block w-full h-4/6" : "hidden"}>

                                    {/* Question --------*/}
                                    <h1 className=' font-bold text-3xl text-gray-700 mb-5'>
                                        {currentStep + 1}.
                                        Select Date
                                    </h1>

                                    {/* Date Selector */}
                                    <div className="mt-4">
                                        <input className='text-lg font-medium  focus:outline-none' type="date" value={selectedDate} onChange={handleDateChange} />
                                    </div>

                                </div>
                                {/* ========================================================================== */}


                                {/* Question : 5 - Write a personalized message to cook ----------------------------------------------------------------------------- */}
                                <div className={currentStep === 4 ? "block w-full h-4/6" : "hidden"}>

                                    {/* Question --------*/}
                                    <h1 className=' font-bold text-3xl text-gray-700 mb-5'>
                                        {currentStep + 1}.
                                        Write a personalized message
                                    </h1>

                                    {/* personalized message */}
                                    <div className="mt-4 h-full">
                                        {/* answer ----------*/}
                                        <textarea className=' focus:outline-none p-3 border rounded-md w-full h-full' onChange={e => setMessage(e.target.value)} ></textarea>
                                    </div>

                                </div>
                                {/* ========================================================================== */}


                                {/*  next button or cancel button-------------------------------------------- */}
                                <div className=' w-full flex justify-between items-center'>

                                    {/* cancel button */}
                                    <button className="bg-red-500 btn-sm text-white px-4 py-3 flex justify-center items-center rounded-lg" onClick={closeModal}>Cancel</button>

                                    {/* next and back button */}
                                    <div className=' flex justify-between items-center'>
                                        <button className="bg-amber-500 text-white px-4 py-2 rounded-lg flex justify-center items-center btn-sm me-3" onClick={() => setCurrentStep(prevStep => prevStep - 1)}>Back</button>

                                        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg flex justify-center items-center btn-sm" onClick={() => setCurrentStep(prevStep => prevStep + 1)}>Next</button>
                                    </div>
                                </div>
                                {/* ========================================================================= */}
                            </div>
                        ) : (
                            <div className=' h-full flex flex-col justify-between items-center'>


                                <p className=' text-3xl font-bold text-gray-600'>You have answered all questions. Confirm booking of {price * counter}$?</p>
                                <img className=' w-40 h-40' src="https://webstockreview.net/images/cook-clipart-cooking-show-5.png" alt="" />

                                {/* Confirm Booking button or Cancel button---------------------------- */}
                                <div className=" w-full flex justify-between items-center mt-4">
                                    <button className=" btn-sm bg-red-500 text-white px-4  rounded-lg" onClick={closeModal}>Cancel</button>
                                    <button className="btn-sm  bg-green-500 text-white px-4  rounded-lg" onClick={confirmBooking}>Confirm Booking</button>
                                </div>
                                {/* =================================================================== */}
                            </div>
                        )}
                    </div>
                </div>
            )}
            {/* ============================================================================================= */}
        </div>
    );
};

export default Card;
