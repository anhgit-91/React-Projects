import React, { useEffect, useState } from "react";

// Component that toggles fetching data in chunks every 5 seconds when enabled
const Toggle = () => {
    // State to hold the fetched data
    const [userData, setUserData] = useState([]);
    // State to control if fetching is active
    const [isFetching, setIsFetching] = useState(false);
    // State to store any errors during the fetch
    const [error, setError] = useState(null);
    // State to keep track of the current index for chunk-based fetching
    const [currentIndex, setCurrentIndex] = useState(0);

    // Effect to handle the interval-based data fetching
    useEffect(() => {
        let intervalID;

        // Only set up the interval if isFetching is true
        if (isFetching) {
            intervalID = setInterval(() => {
                // Fetch data from the API
                fetch("https://jsonplaceholder.typicode.com/comments")
                    .then((response) => {
                        if (!response.ok) {
                            throw new Error("Network response was not ok");
                        }
                        return response.json();
                    })
                    .then((data) => {
                        // Append the new data chunk to existing userData
                        setUserData((prevData) => [
                            ...prevData,
                            ...data.slice(currentIndex, currentIndex + 10),
                        ]);
                        // Increment currentIndex to fetch the next chunk on the next interval
                        setCurrentIndex((prevIndex) => prevIndex + 10);
                    })
                    .catch((error) => {
                        // If an error occurs, store it in the error state
                        setError(error.message);
                    });
            }, 5000); // Fetch new data every 5 seconds
        }

        // Cleanup the interval when component unmounts or isFetching changes
        return () => clearInterval(intervalID);

    }, [isFetching, currentIndex]); // Rerun effect when isFetching or currentIndex changes

    // Display error message if there was an error during fetching
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            <p>Start fetching data in chunks:</p>
            {/* Button to toggle data fetching */}
            <button onClick={() => setIsFetching(!isFetching)}>
                {isFetching ? "Pause" : "Start"}
            </button>
            <div>
                {/* Display fetched data in list format */}
                {userData.length > 0 && (
                    <div>
                        {userData.map((user) => (
                            <ul key={user.id}>
                                <li>Post ID: {user.id}</li>
                                <li>Name: {user.name}</li>
                                <li>Email: {user.email}</li>
                                <li>Content: {user.body}</li>
                            </ul>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Toggle;
