import React, { useContext, useEffect, useState } from 'react';
import { authContext } from '../../../../components/AuthProvider/AuthProvider';

const PendingCook = () => {
    const { allcooks } = useContext(authContext);
    const [isPending, setIsPending] = useState([]);

    useEffect(() => {
        const pending = allcooks?.filter(cook => cook.status === "pending")
        setIsPending(pending)
    }, [])


    const handleApprove = (id) => {
        fetch(`http://localhost:3000/getAllUsers/${id}`, {
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
    }


    return (
        <div>
            <h1 className=' text-3xl font-bold mb-10 text-gray-800'>Pending Cook</h1>
            {
                isPending.map(cook => <div className=' flex justify-between items-center p-3 cursor-pointer hover:bg-amber-50 transition-all rounded-md border-b border-dashed'>

                    <div className=' flex justify-start items-center'>
                        {/* cook image */}
                        <img src={cook?.img} className=' w-12 rounded-md' alt="" />
                        <h1 className=' font-semibold text-base ms-3'>{cook?.display_name}</h1>
                    </div>

                    <div>
                        <button onClick={() => document.getElementById('my_modal_4').showModal()}
                            className=' btn btn-sm bg-amber-300 text-sm px-3 rounded-md me-2'>Details</button>
                        <button onClick={() => handleApprove(cook?._id)} className=' hover:bg-green-800 transition-all btn btn-sm px-3 text-sm rounded-md bg-green-700  text-white'>approve</button>
                        <button className=' hover:bg-green-800 transition-all btn btn-sm px-3 text-sm ms-2 rounded-md bg-red-700 text-white'>deny</button>
                    </div>


                    {/* ------------------------modal ----------------------------------------------------- */}
                    <dialog id="my_modal_4" className="modal">
                        <div className="modal-box w-11/12 max-w-5xl">

                            {/* details of cook -------------------------------------------- */}
                            <img src={cook?.img} className=' rounded-md w-36 mb-2' alt="" />
                            <h3 className="font-bold text-lg">Name: {cook?.first_name + " " + cook?.last_name}</h3>
                            <p>UserName: {cook.userName ? cook.userName : "user name is currently missing"}</p>
                            <p>Status: {cook?.status}</p>
                            <p>Email: {cook.email ? cook.email : "Currently email is missing"}</p>
                            <p> Description: {cook?.description}</p>
                            <h1 className=' font-semibold text-base mt-3'>All dishes he can make</h1>

                            <div>
                                <div className=' grid grid-cols-3 grid-rows-1'>
                                    <p>Dish Name</p>
                                    <p>Price</p>
                                    <p>Category</p>
                                </div>
                                {cook?.dishes?.map(dish => <div className='grid grid-cols-3 grid-rows-1'>
                                    <p className=' font-semibold'>{dish?.dish}</p>
                                    <p className=' font-semibold'>{dish?.dishPrice}$</p>
                                    <p className=' font-semibold'>{dish?.category}</p>
                                </div>

                                )}
                            </div>

                            {/* ============================================================= */}


                            {/* close the modal ----------------------------- */}
                            <div className="modal-action">
                                <form method="dialog">
                                    {/* if there is a button, it will close the modal */}
                                    <button className="btn btn-sm">Close</button>
                                </form>
                            </div>
                        </div>
                    </dialog>



                </div>)
            }



        </div>
    );
};

export default PendingCook;