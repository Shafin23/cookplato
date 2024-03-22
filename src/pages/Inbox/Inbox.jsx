import React, { useContext, useEffect, useState } from 'react';
import { authContext } from '../../components/AuthProvider/AuthProvider';

const Inbox = () => {
    const [allMessage, setAllMessage] = useState([]) // all conversation that happens till now
    const [specificMessage, setSpecificMessage] = useState([]) // specific message
    const [trigger, setTrigger] = useState(false) // change value after 500ms to reload all messages
    const [message, setMessage] = useState('') // send message
    const [loggedInUser, setLoggedInUser] = useState(null)
    const { userData, loggedInUserId } = useContext(authContext);



    setTimeout(() => {
        setTrigger(!trigger)
    }, 500);

    // Fetch data using id ---------------------------------------------------------
    useEffect(() => {
        fetch(`http://localhost:3000/getAllUsers/${loggedInUserId}`)
            .then(response => response.json())
            .then(data => setLoggedInUser(data))
    }, []);

    //fetching data from server -------------------------
    useEffect(() => {
        // fetching all messages -------------------
        fetch("http://localhost:3000/getAllMessages")
            .then(response => response.json())
            .then(data => setAllMessage(data))

        // filtering the loggedin user's conversation only 
        const filteredMessage = allMessage.filter(message => message?.senderEmail === userData?.email || message?.receiverEmail === userData?.email)

        setSpecificMessage(filteredMessage);

    }, [trigger])


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


    return (
        <div className=' mx-auto w-10/12 my-16'>
            {/* Chat */}
            <div  className='w-full border border-gray-300 rounded-md h-auto bg-amber-100 mt-5 pb-5'>
                <div className='w-full flex flex-col justify-start items-center'>
                    {/* Chat History -----------------------------------------------------------*/}
                    <div className='w-full h-80 px-5 py-2 overflow-y-auto'>
                        {specificMessage.map(item => (
                            <div
                                className={item?.senderEmail === userData?.email ? 'w-full flex justify-start items-center mb-3 ' : 'w-full flex justify-end items-center mb-3 '} >
                                <p
                                    className=' bg-amber-400 text-white text-sm px-4 py-2 rounded-lg font-semibold'>{item.message}</p>
                            </div>
                        ))}
                    </div>

                    {/* Send Message Box ---------------------------------------------------------*/}
                    <div className='flex justify-around items-center w-full px-5 py-2'>
                        <input value={message} onChange={(e => setMessage(e.target.value))} type="text" className='w-10/12 focus:outline-none px-3 py-2 rounded-md' />
                        <button onClick={sendMessage} className='text-white px-5 rounded-md btn btn-sm bg-amber-500 hover:bg-amber-600 border border-none'>Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Inbox;