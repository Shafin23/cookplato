import React, { useContext, useEffect, useState } from 'react';
import { authContext } from '../../../../components/AuthProvider/AuthProvider';

const PendingCook = ({ option }) => {
    const { allcooks } = useContext(authContext);
    const [isPending, setIsPending] = useState([]);
    const [pendingCook, setPendingCook] = useState([]);

    useEffect(() => {
        const fetchData = () => {
            // Filter all cooks with status "pending"
            fetch("https://server-qfkg.vercel.app/getAllUsers/pendingCook")
            .then(response=>response.json())
            .then(data=> setPendingCook(data));
        };

        fetchData(); // Fetch data initially

        // Fetch data every 2 seconds continuously
        const interval = setInterval(fetchData, 2000);

        return () => clearInterval(interval); 
    }, []);

    const handleApprove = (id) => {
        fetch(`https://server-qfkg.vercel.app/getAllUsers/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                status: "approved"
            })

        })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.error('Error approving cook:', error));
    };

    const handleDeny = (id) => {
        fetch(`https://server-qfkg.vercel.app/getAllUsers/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                status: "denied"
            })

        })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.error('Error denying cook:', error));
    };

    return (
        <div className={option !== "pending" && "hidden"}>
            <h1 className='text-3xl font-bold mb-10 text-gray-800'>Pending Cook</h1>
            {
                pendingCook.map(cook => (
                    <div key={cook?._id} className='flex justify-between items-center p-3 cursor-pointer hover:bg-amber-50 transition-all rounded-md border-b border-dashed'>
                        <div className='flex justify-start items-center'>
                            {/* Cook image */}
                            <img src={cook?.img} className='w-16 h-12 rounded-md' alt="" />
                            <h1 className='font-semibold text-base ms-3'>{cook?.display_name}</h1>
                        </div>
                        <button onClick={() => document.getElementById('my_modal_4').showModal()} className='btn btn-sm hover:bg-amber-400 transition-all bg-amber-300 text-sm px-3 rounded-md me-2'>Details</button>
                        {/* Modal */}
                        <dialog id="my_modal_4" className="modal">
                            <div className="modal-box w-11/12 max-w-5xl">
                                {/* Cook details */}
                                <img src={cook?.img} className='rounded-md w-36 mb-2' alt="" />
                                <h3 className="font-bold text-lg">Name: {cook?.first_name} {cook?.last_name}</h3>
                                <p className='font-semibold my-1'>UserName: {cook.userName ? cook.userName : "Username is currently missing"}</p>
                                <p className='font-semibold my-1'>Status: {cook?.status}</p>
                                <p className='font-semibold my-1'>Email: {cook.email ? cook.email : "Email is currently missing"}</p>
                                <p>Description: <br /> {cook?.description}</p>
                                <h1 className='font-semibold text-base mt-3'>All dishes he can make</h1>
                                <div>
                                    <div className='grid grid-cols-3 grid-rows-1'>
                                        <p>Dish Name</p>
                                        <p>Price</p>
                                        <p>Category</p>
                                    </div>
                                    {cook?.dishes?.map(dish => (
                                        <div key={dish?._id} className='grid grid-cols-3 grid-rows-1'>
                                            <p className='font-semibold'>{dish?.dish}</p>
                                            <p className='font-semibold'>{dish?.dishPrice}$</p>
                                            <p className='font-semibold'>{dish?.category}</p>
                                        </div>
                                    ))}
                                </div>
                                {/* Modal action */}
                                <div className="modal-action">
                                    <form method="dialog">
                                        <button className="btn btn-sm">Close</button>
                                        <button onClick={() => handleDeny(cook?._id)} className='hover:bg-green-800 transition-all btn btn-sm px-3 text-sm ms-2 rounded-md bg-red-700 text-white'>Deny</button>
                                        <button onClick={() => handleApprove(cook?._id)} className='hover:bg-green-800 transition-all btn btn-sm px-3 text-sm rounded-md bg-green-700 text-white'>Approve</button>
                                    </form>
                                </div>
                            </div>
                        </dialog>
                    </div>
                ))
            }
        </div>
    );
};

export default PendingCook;
