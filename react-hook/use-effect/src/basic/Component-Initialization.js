import React, { useEffect } from "react";

// Create a component that logs "Component Mounted" only once when it mounts.
// Add a cleanup that logs "Component Unmounted" when the component unmounts.


const Initialization = () => {
    

    useEffect(() => {
        console.log("Component Mounted");

        //Clean up
        return () => {
            console.log("Component Unmounted");
        }

    },[]) 


    return (
        <div>
            <h1>Check mounted/unmouted</h1>
        </div>
    );
};

export default Initialization;