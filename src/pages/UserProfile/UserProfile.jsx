import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { authContext } from '../../components/AuthProvider/AuthProvider';

const UserProfile = () => {
    const { id } = useParams();
    const { userData } = useContext(authContext);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [loggedInUser, setLoggedInUser] = useState(null);
    const [isChatOpen, setIsChatOpen] = useState(false);
    const [message, setMessage] = useState('');
    const [sendMessageTrigger, setSendMessageTrigger] = useState(false) // when user click on send btn, then the state will be changed
    const [allConversation, setAllConversation] = useState([]) // all conversation that happened till now
    const [loggedInUsersConversation, setLoggedInUsersConversation] = useState([]) // only loggedin user's conversation

    const handleDateChange = () => {

    }

    // Fetch data using id ---------------------------------------------------------
    useEffect(() => {
        fetch(`http://localhost:3000/getAllCooks/${id}`)
            .then(response => response.json())
            .then(data => setLoggedInUser(data))
    }, []);


    // send message function --------------------------------------------------------------
    const sendMessage = () => {
        const senderEmail = userData?.email;
        const receiverEmail = loggedInUser?.email;

        // Get current time in hours and minutes
        const currentTime = new Date();
        const hours = currentTime.getHours();
        const minutes = currentTime.getMinutes();

        const messageData = {
            message,
            senderEmail,
            receiverEmail,
            time: {
                hours,
                minutes
            }
        };

        fetch("http://localhost:3000/getAllMessages/addMessage", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(messageData)
        })
            .then(response => response.json())
            .then(data => console.log(data));

        setSendMessageTrigger(!sendMessageTrigger);
        setMessage("")
    };

    // fetch messages ----------------------------
    useEffect(() => {
        fetch("http://localhost:3000/getAllMessages")
            .then(response => response.json())
            .then(data => setAllConversation(data))

        // filtering the loggedin user's conversation only 
        const filteredMessage = allConversation.filter(message => message?.senderEmail === userData?.email || message?.receiverEmail === userData?.email)

        setLoggedInUsersConversation(filteredMessage);
    }, [sendMessageTrigger])


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
                        {/* Chat History -----------------------------------------------------------*/}
                        <div className='w-full h-80 px-5 py-2 overflow-y-auto'>
                            {loggedInUsersConversation.map(item => (
                                <div 
                                className={item?.senderEmail===userData?.email?'w-full flex justify-start items-center mb-3 ':'w-full flex justify-end items-center mb-3 '} >
                                    <p
                                    className=' bg-amber-400 text-white text-sm px-4 py-2 rounded-lg font-semibold'>{item.message}</p>
                                </div>
                            ))}
                        </div>

                        {/* Send Message Box ---------------------------------------------------------*/}
                        <div className='flex justify-around items-center w-full px-5 py-2'>
                            <input value={message} onChange={(e => setMessage(e.target.value))} type="text" className='w-8/12 focus:outline-none px-3 py-2 rounded-md' />
                            <button onClick={sendMessage} className='text-white px-5 rounded-md btn btn-sm bg-amber-500 hover:bg-amber-600 border border-none'>Send</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;
