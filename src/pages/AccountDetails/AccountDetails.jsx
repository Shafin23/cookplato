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
    const [imagePreview, setImagePreview] = useState(null); // State to store base64 image data

    const [formData, setFormData] = useState({
        userName: '',
        email: '',
        first_name: '',
        last_name: '',
        display_name: '',
        description: '',
        img: '',
    });

    useEffect(() => {
        if (userData) {
            fetch(`https://server-qfkg.vercel.app/getAllUsers/email/${userData.email}`)
                .then(response => response.json())
                .then(data => {
                    setLoggedUser(data);
                    setFormData({
                        userName: data.user.userName,
                        email: data.user.email,
                        first_name: data.user.first_name,
                        last_name: data.user.last_name,
                        display_name: data.user.display_name,
                        description: data.user.description,
                        img: data.user.img,
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
            const response = await fetch(`https://server-qfkg.vercel.app/getAllUsers/${loggedUser?.user?._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            if (!response.ok) {
                throw new Error('Failed to update user information');
            }
            console.log(`Update successful`);
            toast.success('Update successful');
            handleCloseModal();
        } catch (error) {
            // console.error('Error updating user information:', error.message);
            // toast.error('Failed to update user information');
        }
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setFormData({
            ...formData,
            img: URL.createObjectURL(file),
        });
        // Read file as base64 and set preview
        const reader = new FileReader();
        reader.onloadend = () => {
            setImagePreview(reader.result);
        };
        reader.readAsDataURL(file);
    };

    return (
        <div className="mx-auto w-full max-w-lg my-20">
            <div className="bg-white shadow-lg rounded-lg p-8">
                <h2 className="text-2xl font-semibold text-center mb-2">{loggedUser?.user?.display_name}</h2>
                <p className="text-gray-600 text-center">{loggedUser?.user?.userRole}</p>

                <form>
                    {Object.keys(formData).map((field, index) => (
                        <div key={index} className="mb-4 relative">
                            <label htmlFor={field} className="block mb-1 capitalize">{field.replace('_', ' ')}</label>
                            <input
                                type="text"
                                id={field}
                                name={field}
                                value={formData[field]}
                                onChange={handleChange}
                                className="w-full border px-3 py-2 rounded focus:outline-none"
                            />
                            <HiPencilAlt
                                onClick={() => handleOpenModal(field)}
                                className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer text-amber-400"
                            />
                        </div>
                    ))}

                    <div className="mb-4 relative">
                        <label htmlFor="image" className="block mb-1 capitalize">Profile Photo</label>
                        <input
                            type="file"
                            id="image"
                            name="avatar"
                            onChange={handleFileChange}
                            accept="image/*"
                            className="w-full border px-3 py-2 rounded focus:outline-none"
                        />
                        {imagePreview && (
                            <img src={imagePreview} alt="Preview" className="mt-2 w-full h-auto rounded" />
                        )}
                    </div>
                </form>

                <Modal open={isModalOpen} onClose={handleCloseModal} center>
                    <div className="bg-white p-8 rounded-lg">
                        <h3 className="text-lg font-semibold mb-4">Update {currentField.replace('_', ' ')}</h3>
                        <input
                            type="text"
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
