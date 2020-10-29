import React, { createContext, useState } from 'react';

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
    const [userId, updateUserId] = useState('');

    return (
        <UserContext.Provider value={{
            userId,
            updateUserId
        }}>
            {children}
        </UserContext.Provider>
    );
}

export default UserContextProvider;