import React, { useContext, useEffect, useState } from 'react';
import { authContext } from '../../../../components/AuthProvider/AuthProvider';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';

const ConfirmPayment = ({ option }) => {
    const [confirmedBookings, setConfirmedBookings] = useState([]);
    const [selectedBooking, setSelectedBooking] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const fetchConfirmedBookings = async () => {
            try {
                const response = await fetch("https://cookplato-server.vercel.app/confirmBooking");
                const data = await response.json();
                setConfirmedBookings(data);
            } catch (error) {
                console.error("Error fetching confirmed bookings:", error);
            }
        };

        fetchConfirmedBookings();
        const interval = setInterval(fetchConfirmedBookings, 2000);

        return () => clearInterval(interval);
    }, []);

    const openModal = (booking) => {
        setSelectedBooking(booking);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedBooking(null);
    };

    return (
        <div className={option !== "confirm_payment" && "hidden"}>
            <h1>Confirmed Bookings</h1>
            {confirmedBookings?.map(booking => (
                <div key={booking?._id} className='flex justify-between items-center border-dashed border-b py-4 px-3 rounded-xl hover:bg-amber-50 transition duration-200'>
                    <div className='flex justify-between items-center'>
                        <img src={booking?.dishImg} className='rounded-full w-10 h-10 border-2' alt="" />
                        <p className='text-gray-800 font-medium ms-4'>{booking?.name}</p>
                        <p className='text-gray-800 font-medium ms-4'>{booking?.counter}</p>
                    </div>
                    <div>
                        {/* Details button */}
                        {/* Details button */}
                        <button onClick={() => document.getElementById('my_modal_10').showModal()} className='btn btn-sm bg-amber-400 hover:bg-amber-300 transition-all'>details</button>
                    </div>


                    {/* Modal for displaying booking details */}
                    <dialog id="my_modal_10" className="modal">
                        <div className="modal-box">
                            <h3 className="font-bold text-lg">Dish Name: {booking?.name}</h3>
                            <p className="pt-4">Category: {booking?.category}</p>
                            <p>How much: {booking?.counter}</p>
                            <p>Total Price: {booking?.total_amount}$</p>
                            <p>Food related issue?: {booking?.foodIssue}</p>
                            <p>Message: {booking?.message}</p>
                            <p>Event Address: {booking?.eventAddress}</p>
                            <p className='mb-6'>Date: {booking?.selectedDate}</p>
                            <p>Requested by: {booking?.display_name}</p>
                            <p>Email: {booking?.email}</p>
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

export default ConfirmPayment;
