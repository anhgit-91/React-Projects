import React, { createContext, useState, useContext, useEffect } from 'react'
import "./DataContext.css"
/*
Create a DataFetchContext that stores fetched data and loading/error states.
Use an external API to fetch data within the DataFetchProvider.
Implement functions to refetch data or fetch new data sets based on parameters.
Show a loading spinner or error message based on the context state.
Display the fetched data in a component, updating it whenever new data is fetched.
Goal: Use context to manage asynchronous data, including loading and error states, across components.
*/



const APIContext = createContext();
const DataFetchContext = () => {
    // State to hold the fetched data
    const [data, setData] = useState([])
    // State to control if fetching is active
    const [isFetching, setIsFetching] = useState(true)
    // State to hold any errors during the fetch
    const [error, setError] = useState(null)
    // State to set the limit
    const [limit, setLimit] = useState(5)

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}`)
        .then(response => {
            if(!response.ok) {
                throw new Error("Network repsonse was not ok!")
            }
            return response.json()
        })
        .then(APIdata => {
            setData(APIdata)
            setIsFetching(false)
        })
        .catch(error => {
            setError(error.message)
            setIsFetching(false)
        })
    },[limit])
    return (
        <APIContext.Provider value={{data, setData, isFetching, error, limit, setLimit}}>
            <Error />
            <Fetching />
            <ShowMoreData />
            <DataList />
        </APIContext.Provider>
    )
}

const DataList = () => {
    const {data} = useContext(APIContext)
    return (
        <div>
            <ul>
                {data.toReversed().map((todo) => (
                    <li>
                        <p>ID: {todo.id}</p>
                        Title: {todo.title}
                    </li>
                ))}
            </ul>
        </div>
    ) 
}

const ShowMoreData = () => {
    const {limit, setLimit} = useContext(APIContext)
    const handleShow = () => {
        setLimit(prev => prev + 5)
    }
    return (
        <div>
            <p>Number of todos: {limit}</p>
            <button onClick={handleShow}>Show more todos</button>
        </div>
    ) 
}

const Fetching = () => {
    const {isFetching} = useContext(APIContext)
    return(
        <div>
            { isFetching && 
                <span className="loader"></span>
            }
        </div>
    ) 
}

const Error = () => {
    const {error} = useContext(APIContext)
    return (
        <div>
            {error && 
                <p>Error: {error}</p>
            }
        </div>
    )
}
export default DataFetchContext;