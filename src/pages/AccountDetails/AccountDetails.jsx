import React, { useContext } from 'react';
import { authContext } from '../../components/AuthProvider/AuthProvider';

const AccountDetails = () => {
    // recieving state and function from authprovider through context api -------------
    const { loggedUser } = useContext(authContext);
    // ================================================================================



    return (
        <div className='mx-auto w-[95vw] my-20'>
            <div className="max-w-lg mx-auto p-8 bg-white shadow-lg rounded-lg">
                <img className="w-32 h-32 mx-auto mb-4 rounded-full" src={loggedUser?.img} alt={loggedUser?.userName} />
                <h2 className="text-2xl font-semibold text-center mb-2">{loggedUser?.display_name}</h2>
                <p className="text-gray-600 text-center ">{loggedUser?.userRole}</p>
                <p className="text-gray-600 text-center mb-4">{loggedUser?.description}</p> 

                <div className="border-t border-gray-200">
                    <h3 className="text-xl font-semibold mb-2">Dishes</h3>
                    <ul>
                        {loggedUser?.dishes?.map((dish, index) => (
                            <li key={index} className="flex justify-between items-center py-2">
                                <div>
                                    <p className="font-semibold">{dish?.dish}</p>
                                    <p className="text-gray-600">{dish?.category}</p>
                                </div>
                                <p className="font-semibold">{dish?.dishPrice}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default AccountDetails;