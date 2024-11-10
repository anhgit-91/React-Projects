import React, { createContext, useContext, useState } from "react";

/*
    Create a ModalContext to manage the state of a modal (e.g., isOpen).
    Create a ModalProvider that provides openModal, closeModal, and toggleModal functions.
    Build a Modal component that displays when isOpen is true.
    Add OpenModalButton and CloseModalButton components that use the context to control the modal.
*/

const ToggleModal = createContext();

const ModalContext = () => {

    const [isOpen, setIsOpen] = useState(false);

    return <ToggleModal.Provider value={{isOpen, setIsOpen}}>
        {
            isOpen ? <Modal /> : <OpenModal />
        }
    </ToggleModal.Provider>;
};

const Modal = () => {
    return (
        <div>
            <ul>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Eius laborum nemo delectus quia.</li>
                <li>Pariatur unde voluptatibus neque magni?</li>
                <li>Nemo soluta eligendi ullam dicta.</li>
                <li>Enim dolorem facilis inventore molestiae!</li>
            </ul>

            <CloseModal />
        </div>
    ) 
}

const OpenModal = () => {
    const {setIsOpen} = useContext(ToggleModal);
    const handleOpenModal = () => {
        setIsOpen(true)
    }
    return (
        <div>
            <button onClick={handleOpenModal}>Open</button>
        </div>
    );
}

const CloseModal = () => {
    const {setIsOpen} = useContext(ToggleModal);
    const handleCloseModal = () => {
        setIsOpen(false)
    }
    return (
        <div>
            <button onClick={handleCloseModal}>Close</button>
        </div>
    );
}

export default ModalContext;
