import React, { useState } from "react";

const ArrayManipulator = () => {
    // Your state and logic here
    const [numberList, setNumberList] = useState([]);
    const [originalList, setOriginalList] = useState([]);
    const [newNum, setNewNum] = useState("");
    const [filterInput, setFilterInput] = useState("");

    const handleNewNum = (e) => {
        setNewNum(e.target.value);
    };
    const handleAdd = () => {
        if (!isNaN(newNum) && newNum.trim() !== '') {
            const updateList = [...numberList, parseInt(newNum)]
        setNumberList(updateList);
        setOriginalList(updateList);
        setNewNum("");
        }
    };

    const handleFilterInput = (e) => {
        setFilterInput(e.target.value);
    };

    const handleFilter = (index) => {
        if (!isNaN(filterInput) && filterInput.trim() !== '') {
        setNumberList(numberList.filter(num => num >= parseInt(filterInput)));
        setFilterInput("");
        }
    };

    const handleReset = () => {
        setNumberList([...originalList]);
    };
    return (
        <div>
            <h1>Number List</h1>
            <ul>{/* Map through numbers here */}
            {numberList.map((num, index) => (
          <li key={index}>{num}</li>
        ))}
            </ul>

            <input
                type="number"
                placeholder="Add new number"
                value={newNum}
                onChange={handleNewNum}
            />
            <button onClick={handleAdd}>Add</button>
            <input
                value={filterInput}
                placeholder="Filter numbers above"
                onChange={handleFilterInput}
            />
            <button onClick={handleFilter}>Filter</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    );
};

export default ArrayManipulator;
