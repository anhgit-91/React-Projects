import React, { useState, useContext, createContext } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // one button in Home, one in Sidebar --> two functions

    const openSidebar = () => {
        setIsSidebarOpen(true);
    };
    const closeSidebar = () => {
        setIsSidebarOpen(false);
    };
    const openModal = () => {
        setIsModalOpen(true);
    };
    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <AppContext.Provider
            value={{
                isModalOpen,
                isSidebarOpen,
                openSidebar,
                closeSidebar,
                openModal,
                closeModal,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

//custom Hook to help reduce the no of components that need to be imported, rather than import useContext and AppContext
export const useGlobalContext = () => {
    return useContext(AppContext);
};

export { AppContext, AppProvider };
