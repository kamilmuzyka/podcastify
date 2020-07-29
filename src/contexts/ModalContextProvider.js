import React, { createContext, useState } from 'react';

export const ModalContext = createContext();

const ModalContextProvider = (props) => {
    const [modalActive, updateModalActive] = useState(false);
    const [modalContent, updateModalContent] = useState(null);

    const openModal = (content) => {
        updateModalContent(content);
        updateModalActive(true);
    }

    const closeModal = () => {
        updateModalContent(null);
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