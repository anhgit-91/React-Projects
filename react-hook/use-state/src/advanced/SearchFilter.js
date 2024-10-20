import React, { useState } from "react";

const SearchFilter = () => {
    // Your state and logic here
    const [users] = useState(["Alex", "ZB", "Cj", "DF", "Eh", "fb", "fcc"]);
    const [searchItem, setSearchItem] = useState("");

    const filterUsers = users.filter((user) =>
        user.toLocaleLowerCase().includes(searchItem.toLowerCase())
    );
    return (
        <div>
            <input
                type="text"
                value={searchItem}
                placeholder="Search users..."
                onChange={(e) => setSearchItem(e.target.value)}
            />
            <ul>
                {/* Map through filtered users here */}
                {filterUsers.map((user, idx) =>
                    <li key={idx}>{user}</li>    
                )}
            </ul>
        </div>
    );
};

export default SearchFilter;
