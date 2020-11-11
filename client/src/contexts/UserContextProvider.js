import React, { createContext, useState } from 'react';

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
    const [userId, updateUserId] = useState('');
    const [userLibrary, updateUserLibrary] = useState('');
    const [userLibraryRefresher, updateUserLibraryRefresher] = useState(null);

    return (
        <UserContext.Provider value={{
            userId,
            userLibrary,
            userLibraryRefresher,
            updateUserId,
            updateUserLibrary,
            updateUserLibraryRefresher
        }}>
            {children}
        </UserContext.Provider>
    );
}

export default UserContextProvider;