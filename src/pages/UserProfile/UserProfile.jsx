import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { authContext } from '../../components/AuthProvider/AuthProvider';
import PriceSection from './PriceSection/PriceSection';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js'; // Import loadStripe function

const stripePromise = loadStripe("pk_test_51OY48pCg3UF6njdMXYwA7KnDAXPU64Spvu2xdQmgH0ggjM57bwH5T8X6iyY3G3w299SUGQa6wWdFlZpaqprQGVlq00iDqMKDhL");

const UserProfile = () => {
    const { id } = useParams();
    const { userData } = useContext(authContext);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [loggedInUser, setLoggedInUser] = useState(null); // wrong naving convention. this is basically clicked 
    const [isChatOpen, setIsChatOpen] = useState(false);
    const [message, setMessage] = useState('');
    const [sendMessageTrigger, setSendMessageTrigger] = useState(false) // when user click on send btn, then the state will be changed
    const [allConversation, setAllConversation] = useState([]) // all conversation that happened till now
    const [loggedInUsersConversation, setLoggedInUsersConversation] = useState([]) // only loggedin user's conversation
    const [totalPrice, setTotalPrice] = useState(0) // total price amount

    const handleDateChange = () => {

    }

    
    // Fetch data using id ---------------------------------------------------------
    useEffect(() => {
        fetch(`http://localhost:3000/getAllUsers/${id}`)
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

    console.log(loggedInUser)
    return (
        <div className='w-[85vw] mx-auto my-14 flex justify-between items-start'>

            {/* calender , dish list ------------------------------- */}
            <div className='w-[30vw]'>

                {/* dish list ------------------------------ */}
                <div className=' overflow-y-scroll mb-4 max-h-96 h-auto'>
                    <h1 className=' font-semibold text-gray-600 mb-3'>Available Dishes {`(${loggedInUser?.dishes?.length})`}</h1>
                    <div>
                        {
                            loggedInUser?.dishes?.map(item => (
                                <p className=' mb-3 border border-amber-100 rounded-sm px-3 py-3 flex justify-between items-center hover:bg-amber-50 transition-all'>
                                    {/* item name---------- */}
                                    <span className=' font-medium text-gray-700'>{item.dish}</span>

                                    {/* counter ------- */}
                                    <span>
                                        <button onClick={() => setTotalPrice(totalPrice + parseInt(item.dishPrice))} className='btn btn-xs me-2 rounded'>+</button>
                                        <button onClick={() => setTotalPrice(totalPrice - parseInt(item.dishPrice))} className='btn btn-xs rounded'>-</button>
                                    </span>

                                    {/* price ---------- */}
                                    <span>{item.dishPrice}$</span>
                                </p>
                            ))
                        }
                    </div>
                </div>


                {/* Calendar  =------------------------------ */}
                <Calendar
                    onChange={handleDateChange}
                    value={selectedDate}
                    className="custom-calendar rounded-md p-5 shadow-lg hover:scale-105 transition-all"
                />
            </div>


            {/* User Profile section and price section --------------------------------*/}
            <div className=' w-[70vw]'>
                <div className='w-full h-auto p-4 ms-4 border border-gray-300 rounded-md'>
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
                                        className={item?.senderEmail === userData?.email ? 'w-full flex justify-start items-center mb-3 ' : 'w-full flex justify-end items-center mb-3 '} >
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

                <Elements stripe={stripePromise}>
                    <PriceSection totalPrice={totalPrice} />
                </Elements>
            </div>
        </div>
    );
};

export default UserProfile;
