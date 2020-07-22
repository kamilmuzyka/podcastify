import React, { useState, createContext } from 'react';

export const ModalContext = createContext();

const ModalContextProvider = (props) => {
    const [modalActive, updateModalActive] = useState(true);
    const [modalContent, updateModalContent] = useState();

    return (
        <ModalContext.Provider value={{
            modalActive,
            updateModalActive,
            modalContent,
            updateModalContent
        }}>
            {props.children}
        </ModalContext.Provider>
    );
}

export default ModalContextProvider;