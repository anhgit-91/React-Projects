import React, { useState, useEffect} from 'react';


// Build a timer component that starts counting seconds when the component mounts.
// Use useEffect to increment the count every second, and clean up the interval on component unmount.


const Timer = () => {
    // Logic here
    const [timeValue, setTimeValue] = useState(0)

    useEffect( 
        () => {
            const timeInterval = setInterval(() => setTimeValue(prev => prev + 1),1000);

            return () => clearInterval(timeInterval);
        }
        ,[])
    return (
        <div>
            Timer: {timeValue} seconds
        </div>
    )

};

export default Timer;