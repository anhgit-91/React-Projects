// import React, { createContext, useContext, useState, useEffect } from "react";

// /*
//     Create a NotificationContext to manage the state of notifications.
//     Components:
//     - Notification: The main provider component that uses the NotificationContext.
//     - AddNoti: Component for adding new notifications.
//     - NotiList: Component for displaying all notifications.
//     - RemoveNoti: Component that automatically removes notifications after a set duration.
// */

// // Create the context for notifications
// const NotiContext = createContext();

// // Main component that provides the context
// const Notification = () => {
//     // State to store an array of notifications
//     const [notifs, setNotifs] = useState([]);
    
//     return (
//         <NotiContext.Provider value={{ notifs, setNotifs }}>
//             <AddNoti />  {/* Component to add notifications */}
//             <NotiList /> {/* Component to display notifications */}
//             <RemoveNoti /> {/* Component to remove notifications automatically */}
//         </NotiContext.Provider>
//     );
// };

// // Component to display the list of notifications
// const NotiList = () => {
//     const { notifs } = useContext(NotiContext); // Access the notifications context

//     return (
//         <div>
//             <ul>
//                 {notifs.map((notif) => (
//                     <li key={notif.id}>
//                         {notif.content}
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// // Component to automatically remove notifications at intervals
// const RemoveNoti = () => {
//     const { notifs, setNotifs } = useContext(NotiContext);

//     // useEffect hook to set up a timer to remove the first notification every 5 seconds
//     useEffect(() => {
//         if (notifs.length === 0) return; // Avoid running the interval if there are no notifications

//         const interval = setInterval(() => {
//             setNotifs((prevNotifs) => prevNotifs.filter((_, idx) => idx !== 0)); // Remove the first notification
//         }, 5000);

//         // Cleanup function to clear the interval when the component unmounts or dependencies change
//         return () => clearInterval(interval);
//     }, [notifs, setNotifs]);

//     return <></>; // This component doesn't need to render anything
// };

// // Component to add new notifications
// const AddNoti = () => {
//     const { notifs, setNotifs } = useContext(NotiContext);
//     const [newNoti, setNewNoti] = useState(''); // State to manage input for new notifications

//     // Function to handle adding a new notification
//     const handleAdd = () => {
//         if (!newNoti.trim()) return; // Prevent adding empty notifications
//         setNotifs([...notifs, { id: Date.now(), content: newNoti }]); // Add the new notification to the list
//         setNewNoti(''); // Clear the input field
//     };

//     return (
//         <div>
//             <label htmlFor="notiContent">Add new notifications</label> <br />
//             <input 
//                 type="text" 
//                 name="notiContent" 
//                 value={newNoti} 
//                 onChange={(e) => setNewNoti(e.target.value)} 
//             />
//             <button onClick={handleAdd}>Add</button>
//         </div>
//     );
// };

// export default Notification;

import React, { createContext, useContext, useState } from "react";

/*
    Improved approach for automatically removing notifications:
    - Each notification has its own timer that removes it after 5 seconds.
    - This ensures that notifications are managed individually.
*/

// Create the context for notifications
const NotiContext = createContext();

// Main provider component for the notification context
const Notification = () => {
    const [notifs, setNotifs] = useState([]);

    return (
        <NotiContext.Provider value={{ notifs, setNotifs }}>
            <AddNoti />
            <NotiList />
        </NotiContext.Provider>
    );
};

// Component to display the list of notifications
const NotiList = () => {
    const { notifs } = useContext(NotiContext);

    return (
        <div>
            <ul>
                {notifs.map((notif) => (
                    <li key={notif.id}>
                        {notif.content}
                    </li>
                ))}
            </ul>
        </div>
    );
};

// Component to add notifications
const AddNoti = () => {
    const { notifs, setNotifs } = useContext(NotiContext);
    const [newNoti, setNewNoti] = useState('');

    // Function to add a new notification and start a timer for its removal
    const handleAdd = () => {
        if (!newNoti.trim()) return; // Prevent adding empty notifications

        const notifId = Date.now();
        setNotifs([...notifs, { id: notifId, content: newNoti }]);

        // Set a timer to remove this notification after 5 seconds
        setTimeout(() => {
            setNotifs((prevNotifs) => prevNotifs.filter((notif) => notif.id !== notifId));
        }, 5000);

        setNewNoti(''); // Clear the input field
    };

    return (
        <div>
            <label htmlFor="notiContent">Add new notifications</label> <br />
            <input
                type="text"
                name="notiContent"
                value={newNoti}
                onChange={(e) => setNewNoti(e.target.value)}
            />
            <button onClick={handleAdd}>Add</button>
        </div>
    );
};

export default Notification;
