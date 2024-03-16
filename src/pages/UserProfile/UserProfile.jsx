import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { authContext } from '../../components/AuthProvider/AuthProvider';
import io from 'socket.io-client'; // Import socket.io-client

const socket = io('http://localhost:3000'); // Connect to the Socket.io server

const UserProfile = () => {
    const { id } = useParams();
    const { userData } = useContext(authContext);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [loggedInUser, setLoggedInUser] = useState(null);
    const [isChatOpen, setIsChatOpen] = useState(false);
    const [message, setMessage] = useState('');
    const [chatHistory, setChatHistory] = useState([]);

    const handleDateChange = (date) => {
        setSelectedDate(date);
        // You can perform any additional actions here based on the selected date
    };

    // Fetch data using id
    useEffect(() => {
        fetch(`http://localhost:3000/${id}`)
            .then(response => response.json())
            .then(data => setLoggedInUser(data))
    }, []);

    // Listen for incoming messages
    useEffect(() => {
        socket.on('message', (message) => {
            setChatHistory(prevChatHistory => [...prevChatHistory, message]);
        });
    }, []);

    // Function to send a message
    const sendMessage = () => {
        if (message.trim() !== '') {
            socket.emit('message', { user: loggedInUser, message });
            setChatHistory(prevChatHistory => [...prevChatHistory, { user: loggedInUser, message }]);
            setMessage('');
        }
    };

    console.log(loggedInUser);
    return (
        <div className='w-[85vw] mx-auto my-14 flex justify-between items-start'>
            {/* Calendar */}
            <div className='w-[30vw]'>
                <Calendar
                    onChange={handleDateChange}
                    value={selectedDate}
                    className="custom-calendar rounded-md p-5 shadow-lg hover:scale-110 transition-all"
                />
            </div>
            {/* User Profile */}
            <div className='w-[70vw] h-auto p-4 ms-4 border border-gray-300 rounded-md'>
                <div>
                    {/* Profile Info */}
                    <div className='flex justify-start items-start'>
                        <img src={loggedInUser?.img} className='rounded-md w-[20%] h-full' />
                        <div className='ms-3 mt-3 w-[80%]'>
                            <h1 className='text-4xl font-bold text-gray-700'>{loggedInUser?.first_name + loggedInUser?.last_name}</h1>
                            <article className='text-gray-800 mt-2'>
                                {loggedInUser?.description}
                            </article>
                        </div>
                    </div>
                    {/* Buttons */}
                    <div className='mt-5'>
                        <button onClick={() => setIsChatOpen(!isChatOpen)} className='bg-green-700 hover:bg-green-800 text-white btn-sm px-8 rounded-md border-none btn'>Chat</button>
                        <button className='ms-3 bg-amber-500 hover:bg-amber-600 text-white btn-sm px-8 rounded-md border-none btn'>Share</button>
                    </div>
                </div>
                {/* Chat */}
                <div style={{ display: isChatOpen ? "block" : "none" }} className='w-8/12 border border-gray-300 rounded-md h-auto bg-amber-100 mt-5 pb-5'>
                    <div className='w-full flex flex-col justify-start items-center'>
                        {/* Chat History */}
                        <div className='w-full h-80 px-5 py-2 overflow-y-auto'>
                            {chatHistory.map((msg, index) => (
                                <div key={index} className="mb-2">
                                    <strong>{msg.user.first_name + msg.user.last_name}:</strong> {msg.message}
                                </div>
                            ))}
                        </div>
                        {/* Send Message Box */}
                        <div className='flex justify-around items-center w-full px-5 py-2'>
                            <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} className='w-8/12 focus:outline-none px-3 py-2 rounded-md' />
                            <button onClick={sendMessage} className='text-white px-5 rounded-md btn btn-sm bg-amber-500 hover:bg-amber-600 border border-none'>Send</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;
