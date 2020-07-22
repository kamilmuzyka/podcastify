import React from 'react';
import styled from 'styled-components';

const StyledModal = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    z-index: 9999;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
`;

const Content = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    display: inline-block;
    max-width: 75%;
    max-height: 75vh;
    overflow-y: scroll;
    padding: 5em;
    transform: translate(-50%, -50%);
    border-radius: 1em;
    background-color: var(--primary);
    ::-webkit-scrollbar {
        width: 0;
        background: transparent;
    }
`;

const Close = styled.button`
    position: absolute;
    top: 2.5em;
    right: 2.5em;
    cursor: pointer;
    padding: 0.5em;
    background: transparent;
    border: none;
    outline: none;
`;

const Modal = (props) => {
    return (
        <StyledModal>
            <Content>
                {props.children}
                <Close>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 29.657 29.657">
                    <g id="X" transform="translate(2.828 2.828)">
                    <line id="Line_3" data-name="Line 3" x1="24" y2="24" strokeWidth="4" stroke="#FFFFFF" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                    <line id="Line_4" data-name="Line 4" x2="24" y2="24" strokeWidth="4" stroke="#FFFFFF" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                    </g>
                    </svg>
                </Close>
            </Content>
        </StyledModal>
    );
}

export default Modal;