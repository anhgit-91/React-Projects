import React, { useEffect, useState } from "react";
import Tours from "./Tours";
const url = "https://course-api.com/react-tours-project";

function App() {
    const [loading, setLoading] = useState(true);
    const [tours, setTours] = useState([]);

    // fetch API
    const fetchTours = async () => {
        setLoading(true);
        try {
            const response = await fetch(url);
            const tours = await response.json();
            setLoading(false);
            setTours(tours);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchTours();
    }, []);

    return (
        <>
            <div>{loading ? <p>Loading...</p> : <Tours tours={tours} />}</div>
        </>
    );
}

export default App;
