import React, { useContext, useEffect, useState } from 'react';
import { HiPencilAlt } from 'react-icons/hi';
import { toast } from 'react-toastify';
import { authContext } from '../../components/AuthProvider/AuthProvider';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import 'react-toastify/dist/ReactToastify.css';

const AccountDetails = () => {
    const { userData } = useContext(authContext);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentField, setCurrentField] = useState('');
    const [loggedUser, setLoggedUser] = useState(null);

    const [formData, setFormData] = useState({
        userName: '',
        email: '',
        first_name: '',
        last_name: '',
        location: '',
        password: '',
        newPassword: '',
        confirmPassword: '',
        foodCategory: '', // Added field for food category
        foodItemName: '',
        price: '',
        image: null, // Added field for image upload
    });

    useEffect(() => {
        if (userData) {
            fetch(`http://localhost:3000/getAllUsers/email/${userData.email}`)
                .then(response => response.json())
                .then(data => {
                    setLoggedUser(data);
                    setFormData({
                        userName: data.user.userName,
                        email: data.user.email,
                        first_name: data.user.first_name,
                        last_name: data.user.last_name,
                        location: data.user.location,
                        password: '',
                        newPassword: '',
                        confirmPassword: '',
                        foodCategory: '', // Initialize food category field
                        foodItemName: '',
                        price: '',
                    });
                })
                .catch(error => console.error('Error fetching user details:', error));



        }
    }, [userData]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleOpenModal = (field) => {
        setCurrentField(field);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setCurrentField('');
    };

    const handleSubmit = async () => {
        try {
            const response = await fetch(`http://localhost:3000/getAllUsers/${loggedUser?.user?._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    [currentField]: formData[currentField],
                }),
            });
            if (!response.ok) {
                throw new Error('Failed to update user information');
            }
            fetch("http://localhost:3000/profile", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData.files[0])
            })
                .then(response => response.json())
                .then(data => console.log(data))
            console.log(`Update ${currentField} successful`);
            toast.success('Update successful');
            handleCloseModal();
        } catch (error) {
            console.error('Error updating user information:', error.message);
            toast.error('Failed to update user information');
        }
    };

    const handleAddFoodItem = async () => {
        try {

            const response = await fetch(`http://localhost:3000/getAllUsers/${loggedUser?.user?._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    category: formData.foodCategory,
                    dish: formData.foodItemName,
                    dishPrice: formData.price
                })
            });

            if (!response.ok) {
                throw new Error('Failed to add food item');
            }

            console.log('Food item added successfully:', formData.foodItemName);
            toast.success('Food item added successfully');
            // Optionally, you can add logic here to handle successful response
        } catch (error) {
            console.error('Error adding food item:', error);
            toast.error('Failed to add food item');
            // Optionally, you can add logic here to handle error
        }
    };


    const handleFileChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.files[0], // Only handle single file upload
        });
    };
    return (
        <div className="mx-auto w-full max-w-lg my-20">
            <div className="bg-white shadow-lg rounded-lg p-8">
                <h2 className="text-2xl font-semibold text-center mb-2">{loggedUser?.user?.display_name}</h2>
                <p className="text-gray-600 text-center">{loggedUser?.user?.userRole}</p>
                <p className="text-gray-600 text-center mb-4">{loggedUser?.user?.description}</p>

                <form>
                    {Object.keys(formData).map((field, index) => (
                        <div key={index} className="mb-4 relative">
                            <label htmlFor={field} className="block mb-1 capitalize">{field.replace('_', ' ')}</label>
                            {field === 'foodCategory' ? ( // Render select dropdown for food category
                                <select
                                    id={field}
                                    name={field}
                                    value={formData[field]}
                                    onChange={handleChange}
                                    className="w-full border px-3 py-2 rounded focus:outline-none"
                                >
                                    <option value="">Select Food Category</option>
                                    <option value="Appetizers">Appetizers</option>
                                    <option value="Other">Other</option>
                                    <option value="Pasta">Pasta</option>
                                    <option value="Dessert">Dessert</option>
                                    {/* Add more options as needed */}
                                </select>
                            ) : (
                                <input
                                    type={field.includes('password') ? 'password' : 'text'}
                                    id={field}
                                    name={field}
                                    value={formData[field]}
                                    onChange={handleChange}
                                    className="w-full border px-3 py-2 rounded focus:outline-none"
                                />
                            )}
                            <HiPencilAlt
                                onClick={() => handleOpenModal(field)}
                                className={(field !== "foodCategory" && field !== "foodItemName" && field !== "price") ? "absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer text-amber-400" : "hidden"}
                            />
                        </div>
                    ))}



                    {loggedUser?.user?.userRole === 'cook' && (
                        <form action="http://localhost:3000/profile" method="post" enctype="multipart/form-data" className="mb-4 relative">
                            <label htmlFor="image" className="block mb-1 capitalize">Image</label>
                            <input
                                type="file"
                                id="image"
                                name="avatar"
                                onChange={handleFileChange}
                                accept="image/*" // Accept only image files
                                className="w-full border px-3 py-2 rounded focus:outline-none"
                            />
                            <button type='submit'>submit</button>
                        </form>
                    )}
                </form>

                <div className="flex justify-center">
                    <button onClick={handleAddFoodItem} className="px-4 py-2 rounded bg-amber-400 text-white hover:bg-amber-500">Add Food Item</button>
                </div>

                <Modal open={isModalOpen} onClose={handleCloseModal} center>
                    <div className="bg-white p-8 rounded-lg">
                        <h3 className="text-lg font-semibold mb-4">Update {currentField.replace('_', ' ')}</h3>
                        <input
                            type={currentField.includes('password') ? 'password' : 'text'}
                            value={formData[currentField]}
                            onChange={handleChange}
                            className="w-full border px-3 py-2 rounded focus:outline-none mb-4"
                        />
                        <div className="flex justify-end">
                            <button onClick={handleCloseModal} className="mr-4 px-4 py-2 rounded text-gray-600 hover:bg-gray-200">Cancel</button>
                            <button onClick={handleSubmit} className="px-4 py-2 rounded bg-amber-400 text-white hover:bg-amber-500">Save</button>
                        </div>
                    </div>
                </Modal>
            </div>
        </div>
    );
};

export default AccountDetails;
