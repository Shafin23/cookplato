import { data } from 'autoprefixer';
import React, { useContext, useEffect, useState } from 'react';
import { authContext } from '../../../../components/AuthProvider/AuthProvider';

const PendingBook = ({ option }) => {

    // recieve state and function from authprovider through context api------------
    const { dataFetchTrigger, setDataFetchTrigger } = useContext(authContext)
    // ============================================================================



    // state declaration of this component ---------------
    const [pendingBook, setPendingBook] = useState([]);
    // ===================================================



    // fetch request book dtaa from server --------------
    useEffect(() => {
        fetch("http://localhost:3000/book/pending")
            .then(response => response.json())
            .then(data => setPendingBook(data))
    }, [dataFetchTrigger])
    // ==================================================


    return (
        <div className={option !== "pending_booking" && "hidden"}>
            <h1 className=' text-3xl font-semibold  text-gray-800 mb-3'>Pending Request</h1>

            {/*  all booking request list --------------- */}
            {
                pendingBook?.map(request => <div className=' flex justify-between items-center border-dashed border-b  py-4 px-3 rounded-xl hover:bg-amber-50 transition duration-200'>
                    {/* details show */}
                    <div className=' flex justify-between items-center'>
                        {/* dish image----------------- */}
                        <img src={request?.dishImg} className=' rounded-full w-10 h-10 border-2' alt="" />
                        {/* ============================ */}

                        {/* dish name -------------------- */}
                        <p className=' text-gray-800 font-medium ms-4'>{request?.name}</p>
                        {/* =============================== */}

                        {/* how much number--------- */}
                        <p className=' text-gray-800 font-medium ms-4'>count: {request?.counter}</p>
                        {/* ========================= */}
                    </div>

                    {/* action - button ---------  */}
                    <div>
                        {/*  details button ---------- */}
                        <button
                            onClick={() => document.getElementById('my_modal_1').showModal()}
                            className=' btn btn-sm bg-amber-400 hover:bg-amber-300 transition-all'>details</button>
                        {/* =========================== */}


                    </div>


                    {/* modal--------------------------------------------------------------------- */}
                    <dialog id="my_modal_1" className="modal">
                        <div className="modal-box">
                            <h3 className="font-bold text-lg">Dish Name: {request?.name}</h3>
                            <p className="pt-4">category: {request?.category}</p>
                            <p>How much: {request?.counter}</p>
                            <p>Total Price: {request?.total_amount}$</p>
                            <p>Food related issue?: {request?.foodIssue}</p>
                            <p>Message: {request?.message}</p>
                            <p>Event Address: {request?.eventAddress}</p>
                            <p className=' mb-6'>Date: {request?.selectedDate}</p>
                            

                            <p>Requested by: {request?.display_name}</p>
                            <p>Email: {request?.email}</p>

                            <div className="modal-action">
                                <form method="dialog">
                                    {/* if there is a button in form, it will close the modal */}
                                    <button className="btn btn-sm">Close</button>
                                </form>
                            </div>
                        </div>
                    </dialog>
                    {/* ============================================================================ */}

                </div>)
            }

        </div>
    );
};

export default PendingBook;