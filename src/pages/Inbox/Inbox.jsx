import React, { useContext, useEffect, useState } from 'react';
import { authContext } from '../../components/AuthProvider/AuthProvider';

const Inbox = () => {

    const { messageReciever, userData, setMessageReciever } = useContext(authContext);

    const [allMessage, setAllMessage] = useState([]); // all conversation that happens till now
    const [specificMessage, setSpecificMessage] = useState([]); // specific message
    const [trigger, setTrigger] = useState(false); // change value after 500ms to reload all messages
    const [message, setMessage] = useState(''); // send message
    const [loggedInUser, setLoggedInUser] = useState(null);
    const [messageSenderCollection, setMessageSenderCollection] = useState([]);
    const [allUser, setAllUser] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:5000/getAllMessages");
                const data = await response.json();
                setAllMessage(data);

                const filteredMessage = data.filter(message => message?.senderEmail === userData?.email || message?.receiverEmail === userData?.email);
                setSpecificMessage(filteredMessage);



            } catch (error) {
                console.error('Error fetching messages:', error);
            }
        };

        const intervalId = setInterval(fetchData, 500); // Fetch messages every 0.5 seconds

        return () => clearInterval(intervalId); // Cleanup function to clear interval

    }, [userData?.email]); // Trigger fetch when userData.email changes




    useEffect(() => {
        fetch(`http://localhost:5000/getAllUsers/email/${userData?.email}`)
            .then(response => response.json())
            .then(data => setLoggedInUser(data));
    }, []);





console.log(loggedInUser)



    // send message function-----------
    const sendMessage = () => {
        // Create messageData object as you did before
        // ...
        const senderEmail = userData?.email;
        const receiverEmail = messageReciever;

        // Get current time in hours and minutes
        const currentTime = new Date();
        const hours = currentTime.getHours();
        const minutes = currentTime.getMinutes();
        const senderName = loggedInUser?.user?.userName;
        
        
        const messageData = {
            message,
            senderEmail,
            receiverEmail,
            senderName,
            time: {
                hours,
                minutes
            }
        };

        fetch("http://localhost:5000/getAllMessages/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(messageData)
        })
            .then(response => response.json())
            .then(data => console.log(data));

        setMessage("");
    };
    // ================================





    return (
        <div className=' mx-auto w-11/12 flex flex-col md:flex-row justify-between items-center my-16'>
            {/* friendlist */}
            <div className=' w-3/12 h-80 overflow-y-scroll  border-dashed'>
                {specificMessage.map(item => <p onClick={()=>setMessageReciever(item?.senderEmail)} className=' hover:bg-amber-300 border-b-2 py-3 px-3 transition-all'>{item?.senderName}</p>)}
            </div>



            {/* Chat */}
            <div className='w-9/12 border border-gray-300 rounded-md h-auto bg-amber-100 mt-5 pb-5'>


                <div className='w-full flex flex-col justify-start items-center'>

                    {/* Chat History -----------------------------------------------------------*/}
                    <div className=' w-full h-80 px-5 py-2 overflow-y-auto'>
                        {specificMessage.map(item => (
                            <div
                                key={item._id} // Assuming each message has a unique identifier like _id
                                className={item?.senderEmail === userData?.email ? 'w-full flex justify-end items-center mb-3 ' : 'w-full flex justify-start items-center mb-3 '} >
                                <p className=' bg-amber-400 text-white text-sm px-4 py-2 rounded-lg font-semibold'>{item.message}</p>
                                <span className="text-gray-500 text-xs ml-1">{item.time.hours}:{item.time.minutes}</span>
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
