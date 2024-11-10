import React, { createContext, useContext, useState } from "react";

/*
    Create a CartContext to store an array of items in a shopping cart.
    Add methods in CartProvider to add, remove, and clear items in the cart.
    Create components for:
        Adding items to the cart.
        Displaying cart items.
        Showing the total number of items.
        Clearing the cart.
    Add a Checkout component that only appears if there are items in the cart.
*/
const ShoppingContext = createContext();
const ShoppingCart = () => {

    const [items, setItems] = useState([]);
    return (
        <ShoppingContext.Provider value={{items, setItems}}>
            <AddItem />
            <ItemList />
        </ShoppingContext.Provider>
    ); 
}

// Adding items to the cart
const AddItem = () => {
    const {items, setItems} = useContext(ShoppingContext)
    const [newItems, setNewItems] = useState('');
    const handleInput = (e) => {
        setNewItems(e.target.value)
    }
    const handleAdd = () => {
        setItems([...items, {id: Date.now(), name: newItems}])
        setNewItems('');
    }
    return (
        <div>
            <label htmlFor="item">Add item to the shopping cart</label> <br />
            <input type="text" name="item" value={newItems} onChange={handleInput}/>
            <button onClick={handleAdd}>Add Item</button>
        </div>
    ) 
}


const RemoveItem = ({ index }) => {
    const { items, setItems } = useContext(ShoppingContext);
    const handleDelete = () => {
        setItems(items.filter((_, idx) => idx !== index));
    };
    return <button onClick={handleDelete}>Delete</button>;
};


const ItemList = (index) => {
    const {items} = useContext(ShoppingContext);

    return (
        <div>
            <ul>
                {items.map((item, index) => (
                <li key={item.id}>
                    {item.name}
                    <RemoveItem index={index}/>
                </li>
                ))}
            </ul>
            <ClearItem />
            <Checkout />
        </div>
    ) 
}

const ClearItem = () => {
    const {setItems} = useContext(ShoppingContext);

    return (
        <div>
            <button onClick={() => setItems([])}>Clear Items</button>
        </div>
    ) 
}

const Checkout = () => {
    return (
        <div>
            <button>Checkout</button>
        </div>
    ) 
}

export default ShoppingCart;