import React, { useContext, useEffect, useState } from 'react';
import { authContext } from '../../components/AuthProvider/AuthProvider';

const Update_Profile = () => {
    const { loggedUser } = useContext(authContext) // recieving state from authprovider

    // State declaration of this component ==============================
    const [first_name, setFirst_Name] = useState("");
    const [last_name, setLast_Name] = useState("");
    const [new_pass, setNew_Pass] = useState("");
    const [confirm_new_pass, setConfirm_New_Pass] = useState("");
    const [display_name, setDisplay_Name] = useState("")
    const [img, setImg] = useState(null);
    const [description, setDescription] = useState("");


    // Updating data to server =========================================
    const handleUpdate = (event) => {
        event.preventDefault();


        fetch(`http://localhost:3000/getAllCooks/${loggedUser?._id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ first_name, last_name, display_name, img, description })
        })
            .then(response => response.json())
            .then(data => console.log(data))


        setFirst_Name("")
        setLast_Name("")
        setDisplay_Name("")
        setNew_Pass("")
        setConfirm_New_Pass("")
        setImg("")
        setDescription("")
        alert("update rpofile successfull!!!")
    }


    return (
        <div className=" w-[95vw] mx-auto px-4 s my-16">
            <div className=" mx-auto">
                <form
                    action="/uploadImg"
                    method="post"
                    enctype="multipart/form-data"
                    className="mt-8 space-y-6"
                    onSubmit={handleUpdate}
                >
                    <div className="grid grid-cols-1 grid-rows-1">
                        <div className=' mb-4'>
                            <label htmlFor="firstName" className="block text-lg font-medium text-gray-600">First Name</label>
                            <input
                                onChange={e => setFirst_Name(e.target.value)}
                                id="firstName"
                                name="firstName"
                                type="text"
                                autoComplete="given-name"
                                required
                                value={first_name}
                                className="mt-3 px-4 py-3 border focus:outline-none block w-full shadow-sm sm:text-sm rounded" />
                        </div>
                        <div className=' mb-4'>
                            <label htmlFor="lastName" className="block text-lg font-medium text-gray-600">Last Name</label>
                            <input
                                onChange={e => setLast_Name(e.target.value)}
                                id="lastName"
                                name="lastName"
                                type="text"
                                autoComplete="family-name"
                                required
                                value={last_name}
                                className="mt-3 px-4 py-3 border focus:outline-none block w-full shadow-sm sm:text-sm rounded" />
                        </div>
                        <div className=' mb-4'>
                            <label htmlFor="email" className="block text-lg font-medium text-gray-600">Email</label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"

                                className="mt-3 px-4 py-3 border focus:outline-none block w-full shadow-sm sm:text-sm rounded" />
                        </div>
                        <div className=' mb-4'>
                            <label htmlFor="password" className="block text-lg font-medium text-gray-600">Password</label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"

                                className="mt-3 px-4 py-3 border focus:outline-none block w-full shadow-sm sm:text-sm rounded" />
                        </div>
                        <div className=' mb-4'>
                            <label htmlFor="displayName" className="block text-lg font-medium text-gray-600">Display Name</label>
                            <input
                                onChange={e => setDisplay_Name(e.target.value)}
                                id="displayName"
                                name="displayName"
                                type="text"
                                autoComplete="username"
                                required
                                value={display_name}
                                className="mt-3 px-4 py-3 border focus:outline-none block w-full shadow-sm sm:text-sm rounded" />
                        </div>
                        <div className=' mb-4'>
                            <label htmlFor="newPassword" className="block text-lg font-medium text-gray-600">New Password</label>
                            <input
                                onChange={e => setNew_Pass(e.target.value)}
                                id="newPassword"
                                name="newPassword"
                                type="password"
                                autoComplete="new-password"
                                value={new_pass}
                                className="mt-3 px-4 py-3 border focus:outline-none block w-full shadow-sm sm:text-sm rounded" />
                        </div>
                        <div className=' mb-4'>
                            <label htmlFor="confirmPassword" className="block text-lg font-medium text-gray-600">Confirm Password</label>
                            <input
                                onChange={e => setConfirm_New_Pass(e.target.value)}
                                id="confirmPassword"
                                name="confirmPassword"
                                type="password"
                                autoComplete="new-password"
                                value={confirm_new_pass}
                                className="mt-3 px-4 py-3 border focus:outline-none block w-full shadow-sm sm:text-sm rounded" />
                        </div>
                        <div className=' mb-4'>
                            <label htmlFor="image" className="block text font-medium text-gray-700">Upload Image</label>
                            <input value={img} className="mt-3 px-4 py-3 border focus:outline-none block w-full shadow-sm sm:text-sm rounded" type="text" onChange={e => setImg(e.target.value)} />
                        </div>

                        <div className=' mb-4'>
                            <label htmlFor="description" className="block text-lg font-medium text-gray-600">Description</label>
                            <input
                                onChange={e => setDescription(e.target.value)}
                                id="description"
                                name="description"
                                type="text"
                                autoComplete="given-name"
                                value={description}
                                className="mt-3 px-4 py-3 border focus:outline-none block w-full shadow-sm sm:text-sm rounded" />
                        </div>


                    </div>

                    <div>
                        <button
                            type="submit"
                            className=" flex justify-center py-3 px-6 border border-transparent rounded text-lg font-medium bg-amber-400">
                            Update Profile
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Update_Profile;
