import React, {useRef} from 'react'

// DOM manipulate
/*
    Create a text input field and a button.
    Use useRef to focus the input field when the button is clicked.

const DomRef = () => {
    const inputFocus = useRef()

    const handleFocus= () => {
        inputFocus.current.focus() 
    }

    return (
        <div>
            <label htmlFor="inputText">DOM manipulate</label>
            <input type="text" name='inputText' ref={inputFocus}/>
            <button onClick={handleFocus}>Click to focus</button>
        </div>
    ) 
}
*/

// Counter
/*
    Create a counter that increments every time a button is clicked.
    Use useRef to store the count value without triggering a component re-render.


const DomRef = () => {
    const count = useRef(0);
    const handleIncrease = () => {
        count.current = count.current + 1
        console.log(`Count updated: ${count.current}`);
    }
    return (
        <div>
            <button onClick={handleIncrease}>Increase count</button>
            <p >Check console to see current count value</p>
        </div>
    ) 
}
*/



/*
Accessing DOM Nodes
Create a form with multiple input fields.
Use useRef to access the value of the first input field when a button is clicked.
*/

const DomRef = () => {
    const firstInput = useRef();
    const handleInput = () => {
        firstInput.current.focus()
    }
    return (
        <div>
            <label htmlFor="">Input 1</label>
            <input type="text" ref={firstInput} />
            <label htmlFor="">Input 2 </label>
            <input type="password" />
            <label htmlFor="">Input 3</label>
            <input type="email" />
            <button onClick={handleInput}>Access Input 1</button>
        </div>
    ) 
}
export default DomRef;