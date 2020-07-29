import React, { useContext } from 'react';

const Logout = (props) => {
    return (
        <div>
            <p>Are you sure you want to log out?</p>
            <button onClick={() => console.log('Logging out')}>Yes</button>
            <button onClick={props.closeModal}>No</button>
        </div>
    );
}

export default Logout;