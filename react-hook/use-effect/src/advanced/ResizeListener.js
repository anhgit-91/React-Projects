import React, { useEffect, useState } from "react";

// Build a component that listens to the window resize event and logs the window dimensions.
// Use useEffect with proper cleanup to ensure the event listener is removed
//      when the component unmounts.
const ResizeListener = () => {
    // const [dimensions, setDimensions] = useState([])
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };

        window.addEventListener("resize", handleResize);

        console.log(
            "Window dimensions: Window Height: ",
            windowSize.height,
            "Window Width: ",
            windowSize.width
        );

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    return (
        <div>
            <h3>Resize the browser window to fire the resize event.</h3>
            <p>Window Height: {windowSize.height}px</p>
            <p>Window Width: {windowSize.width}px</p>
        </div>
    );
};

export default ResizeListener;
