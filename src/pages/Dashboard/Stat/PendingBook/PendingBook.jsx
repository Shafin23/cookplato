import React, { useContext, useEffect, useState } from 'react';
import { authContext } from '../../../../components/AuthProvider/AuthProvider';

const PendingBook = ({ option }) => {
    // Receive state and function from authprovider through context api
    const { userData } = useContext(authContext);

    // State declaration of this component
    const [pendingBook, setPendingBook] = useState([]);
    const [selectedReq, setSelectedReq] = useState(null);

    // Fetch request book data from server
    useEffect(() => {
        const fetchPendingBook = async () => {
            try {
                const response = await fetch(`https://server-qfkg.vercel.app/pendingBooking`);
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

    const handleDetail = (request) => {
        document.getElementById('my_modal_1').showModal()
        setSelectedReq(request)
    }

    return (
        <div className={option !== "pending_booking" && "hidden"}>
            <h1 className='text-3xl font-semibold text-gray-800 mb-3'>Pending Request ({pendingBook.length})</h1>
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
                        <button onClick={()=>handleDetail(request)} className='btn btn-sm bg-amber-400 hover:bg-amber-300 transition-all'>details</button>
                    </div>
                    {/* Modal */}
                    <dialog id="my_modal_1" className="modal">
                        <div className="modal-box">
                            <h3 className="font-bold text-lg">Dish Name: {selectedReq?.name}</h3>
                            <p className="pt-4">Category: {selectedReq?.category}</p>
                            <p>How much: {selectedReq?.counter}</p>
                            <p>Total Price: {selectedReq?.total_amount}$</p>
                            <p>Food related issue?: {selectedReq?.foodIssue}</p>
                            <p>Message: {selectedReq?.message}</p>
                            <p>Event Address: {selectedReq?.eventAddress}</p>
                            <p className='mb-6'>Date: {selectedReq?.selectedDate}</p>
                            <p>Requested by: {selectedReq?.display_name}</p>
                            <p>Email: {selectedReq?.email}</p>
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

export default PendingBook;
