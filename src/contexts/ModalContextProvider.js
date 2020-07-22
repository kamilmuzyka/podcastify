import React, { useState, createContext } from 'react';

export const ModalContext = createContext();

const ModalContextProvider = (props) => {
    const [modalActive, updateModalActive] = useState(true);
    const [modalContent, updateModalContent] = useState();

    const openModal = (content) => {
        updateModalContent(content);
        updateModalActive(true);
    }

    const closeModal = () => {
        updateModalContent();
        updateModalActive(false);
    }

    return (
        <ModalContext.Provider value={{
            modalActive,
            modalContent,
            openModal,
            closeModal
        }}>
            {props.children}
        </ModalContext.Provider>
    );
}

export default ModalContextProvider;