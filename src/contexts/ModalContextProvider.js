import React, { createContext, useState } from 'react';

export const ModalContext = createContext();

const ModalContextProvider = (props) => {
    const [modalActive, updateModalActive] = useState(false);

    const openModal = () => {
        updateModalActive(true);
    }

    const closeModal = () => {
        updateModalActive(false);
    }

    return (
        <ModalContext.Provider value={{
            modalActive,
            openModal,
            closeModal
        }}>
            {props.children}
        </ModalContext.Provider>
    );
}

export default ModalContextProvider;