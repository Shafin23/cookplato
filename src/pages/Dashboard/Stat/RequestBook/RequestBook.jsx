import React, { useContext, useEffect, useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';

const RequestBook = ({ option }) => {


    // State declaration of this component ---------------
    const [requestBook, setRequestBook] = useState([]);
    // ===================================================

    // Fetch request book data from server --------------
    useEffect(() => {
        const fetchData = () => {
            fetch("https://cookplato-server.vercel.app/requestBooking")
                .then(response => response.json())
                .then(data => setRequestBook(data))
                .catch(error => console.error('Error fetching data:', error));
        };

        fetchData(); // Fetch data initially

        // Fetch data every 2 seconds continuously
        const interval = setInterval(fetchData, 2000);

        return () => clearInterval(interval); // Clear interval on unmount or re-render
    }, []);
    // ==================================================

    // Cancel the booking request and delete this request from the list------------------------
    const handleDelete = (id) => {
        fetch(`https://cookplato-server.vercel.app/requestBooking/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
        })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.error('Error deleting request:', error));
    };
    // ========================================================================================

    // Confirm booking --------------------------------------
    // Confirm booking --------------------------------------
    const confirmBooking = (id, request) => {
        // First, delete the item from the current list
        fetch(`https://cookplato-server.vercel.app/requestBooking/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to delete request');
                }
                // If deletion is successful, add the item to another list
                return fetch('https://cookplato-server.vercel.app/pendingBooking', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(request)
                });

                
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to add request to another list');
                }
                // If addition to another list is successful, you can update UI or perform any other action
                console.log('Request confirmed and added to another list successfully.');
                return response.json();
            })
            .catch(error => console.error('Error confirming booking:', error));
    };
    // ======================================================

    // ======================================================

    return (
        <div className={option !== "request" && "hidden"}>
            <h1 className='text-3xl font-semibold text-gray-800 mb-3'>Booking Request</h1>

            {/* All booking request list --------------- */}
            {requestBook?.map(request => (
                <div key={request?._id} className='flex justify-between items-center border-dashed border-b py-4 px-3 rounded-xl hover:bg-amber-50 transition duration-200'>
                    {/* Details show */}
                    <div className='flex justify-between items-center'>
                        {/* Dish image */}
                        <img src={request?.dishImg} className='rounded-full w-10 h-10 border-2' alt="" />
                        {/* Dish name */}
                        <p className='text-gray-800 font-medium ms-4'>{request?.name}</p>
                        {/* How much number */}
                        <p className='text-gray-800 font-medium ms-4'>{request?.counter}</p>
                    </div>

                    {/* Action - button */}
                    <div>
                        {/* Details button */}
                        <button onClick={() => document.getElementById('my_modal_3').showModal()} className='btn btn-sm bg-amber-400 hover:bg-amber-300 transition-all'>details</button>
                        {/* Cancel button */}
                        <button onClick={() => handleDelete(request?._id)} className='btn btn-sm bg-red-400 hover:bg-red-300 ms-3 transition-all'>Cancel</button>
                    </div>

                    {/* Modal */}
                    <dialog id="my_modal_3" className="modal">
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
                                    <button onClick={() => confirmBooking(request._id, request)} className="btn btn-sm bg-green-300 ms-2">Confirm</button>
                                </form>
                            </div>
                        </div>
                    </dialog>
                </div>
            ))}

            
        </div>
    );
};

export default RequestBook;
