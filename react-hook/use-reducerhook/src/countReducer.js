import React, { useReducer } from 'react'

// initial state: The starting state value.
const initialState = {count: 0}

// reducer: A function that defines how state changes based on the action
const reducer = (state, action) => {
    switch(action.type) {
        case "INCREAMENT":
            return {count: state.count + 1};
        case "DECREAMENT":
            return {count: state.count - 1};
        case "RESET":
            return {count: 0};
        default:
            return state;
        
    }
}

// state: The current state value.
// dispatch: A function to send actions to the reducer.

const CountReducerHook = () => {
    const [state, dispatch]  = useReducer(reducer, initialState);
    return (
        <div>
            <h3>Count: {state}</h3>
            <button onClick={() => dispatch({type: "INCREAMENT"})}>Increament</button>
            <button onClick={() => dispatch({type: "DECREAMENT"})}>Decreament</button>
            <button onClick={() => dispatch({type: "RESET"})}>Reset</button>
        </div>
    ) 

}

export default CountReducerHook;