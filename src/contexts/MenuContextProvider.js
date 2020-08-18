import React, { createContext, useState } from 'react';

export const MenuContext = createContext();

const MenuContextProvider = (props) => {

    const [isActive, updateIsActive] = useState(false);

    const toggleMenu = () => {
        updateIsActive(prevState => !prevState);
    }

    return (
        <MenuContext.Provider value={{
            isActive,
            toggleMenu
        }}>
            {props.children}
        </MenuContext.Provider>
    );
}

export default MenuContextProvider;