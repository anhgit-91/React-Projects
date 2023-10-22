import React, { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";

//get local storage
const getLocalStorage = () => {
    let list = localStorage.getItem("list");
    if (list) {
        return JSON.parse(localStorage.getItem("list"));
    } else {
        return [];
    }
};

function App() {
    const [name, setName] = useState("");
    const [list, setList] = useState(getLocalStorage());
    const [isEditing, setIsEditing] = useState(false);
    const [editID, setEditID] = useState(null);
    const [alert, setAlert] = useState({
        show: false,
        msg: "",
        type: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        //check if value is empty
        if (!name) {
            //display alert
            showAlert(true, "danger", "please enter item");
        } else if (name && isEditing) {
            // deal with edit
            setList(
                list.map((item) => {
                    if (item.id === editID) {
                        return { ...item, title: name };
                    }
                })
            );
            setName("");
            setEditID(null);
            setIsEditing(false);
            showAlert(true, "success", "item changed");
        } else {
            //show alert
            showAlert(true, "success", "item added to the list");
            // add new item
            const newItem = {
                id: new Date().getTime().toString(),
                title: name,
            };
            setList([...list, newItem]);
            setName("");
        }
    };
    // alert function
    const showAlert = (show = false, type = "", msg = "") => {
        setAlert({ show, type, msg });
    };
    // clear list function
    const clearList = () => {
        showAlert(true, "danger", "empty list");
        setList([]);
    };
    //delete item function
    const removeItem = (id) => {
        showAlert(true, "danger", "item removed");
        setList(list.filter((item) => item.id !== id));
    };

    //edit item
    const editItem = (id) => {
        const specificItem = list.find((item) => item.id === id);
        setIsEditing(true);
        setEditID(id);
        setName(specificItem.title);
    };

    //local storage
    useEffect(() => {
        localStorage.setItem("list", JSON.stringify(list));
    }, [list]);
    return (
        <section className="section-center">
            <form className="grocery-form" onSubmit={handleSubmit}>
                {alert.show && (
                    <Alert {...alert} removeAlert={showAlert} list={list} />
                )}
                <h3>grocery cart</h3>
                <div className="form-control">
                    <input
                        type="text"
                        className="grocery"
                        placeholder="e.g. eggs"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <button type="submit" className="submit-btn">
                        {isEditing ? "edit" : "submit"}
                    </button>
                </div>
            </form>
            {list.length > 0 && (
                <div className="grocery-container">
                    <List
                        items={list}
                        removeItem={removeItem}
                        editItem={editItem}
                    />
                    <button className="clear-btn" onClick={clearList}>
                        clear items
                    </button>
                </div>
            )}
        </section>
    );
}

export default App;
