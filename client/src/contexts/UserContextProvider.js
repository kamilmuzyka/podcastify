import React, { createContext, useState } from 'react';

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
    const [userId, updateUserId] = useState('');
    const [userLibrary, updateUserLibrary] = useState('');

    return (
        <UserContext.Provider value={{
            userId,
            userLibrary,
            updateUserId,
            updateUserLibrary
        }}>
            {children}
        </UserContext.Provider>
    );
}

export default UserContextProvider;