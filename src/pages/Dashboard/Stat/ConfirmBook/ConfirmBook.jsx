import React, { useContext, useEffect, useState } from 'react';
import { authContext } from '../../../../components/AuthProvider/AuthProvider';

const ConfirmBook = ({ option }) => {
    // Receive state and function from authprovider through context api
    

    // State declaration of this component
    const [pendingBook, setPendingBook] = useState([]);

    // Fetch request book data from server
    useEffect(() => {
        const fetchPendingBook = async () => {
            try {
                const response = await fetch("http://localhost:5000/confirmBooking");
                const data = await response.json();
                setPendingBook(data);
            } catch (error) {
                console.error("Error fetching pending book data:", error);
            }
        };

        fetchPendingBook(); // Fetch data initially

        // Fetch data every 2 seconds continuously
        const interval = setInterval(fetchPendingBook, 2000);

        return () => clearInterval(interval); // Clear interval on unmount or re-render
    }, []);

    return (
        <div className={option !== "confirm" && "hidden"}>
            <h1 className='text-3xl font-semibold text-gray-800 mb-3'>Confirmed Booking ({pendingBook.length})</h1>
            {/* Display all booking request list */}
            {pendingBook?.map(request => (
                <div key={request?._id} className='flex justify-between items-center border-dashed border-b py-4 px-3 rounded-xl hover:bg-amber-50 transition duration-200'>
                    {/* Details show */}
                    <div className='flex justify-between items-center'>
                        {/* Dish image */}
                        <img src={request?.dishImg} className='rounded-full w-10 h-10 border-2' alt="" />
                        {/* Dish name */}
                        <p className='text-gray-800 font-medium ms-4'>{request?.name}</p>
                        {/* How much number */}
                        <p className='text-gray-800 font-medium ms-4'>count: {request?.counter}</p>
                    </div>
                    {/* Action - Button */}
                    <div>
                        {/* Details button */}
                        <button onClick={() => document.getElementById('my_modal_5').showModal()} className='btn btn-sm bg-amber-400 hover:bg-amber-300 transition-all'>details</button>
                    </div>
                    {/* Modal */}
                    <dialog id="my_modal_5" className="modal">
                        <div className="modal-box">
                            <h3 className="font-bold text-lg">Dish Name: {request?.name}</h3>
                            <p className="pt-4">Category: {request?.category}</p>
                            <p>How much: {request?.counter}</p>
                            <p>Total Price: {request?.total_amount}$</p>
                            <p>Food related issue?: {request?.foodIssue}</p>
                            <p>Message: {request?.message}</p>
                            <p>Event Address: {request?.eventAddress}</p>
                            <p className='mb-6'>Date: {request?.selectedDate}</p>
                            <p>Requested by: {request?.display_name}</p>
                            <p>Email: {request?.email}</p>
                            <div className="modal-action">
                                <form method="dialog">
                                    {/* If there is a button in form, it will close the modal */}
                                    <button className="btn btn-sm">Close</button>
                                </form>
                            </div>
                        </div>
                    </dialog>
                </div>
            ))}
        </div>
    );
};

export default ConfirmBook;
