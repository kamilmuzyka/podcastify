import React, { useContext } from 'react';
import styled from 'styled-components';
import { ModalContext } from '../../contexts/ModalContextProvider';

const StyledModal = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    z-index: 9997;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    opacity: ${(props) => props.active === 'true' ? '1' : '0'};
    visibility: ${(props) => props.active === 'true' ? 'visible' : 'hidden'};
    transition: opacity 0.2s ease-in-out,
                visibility 0.2s ease-in-out;
    @media (min-width: 1024px) {
        z-index: 9998;
    }
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
    padding: 0.5em;
    background: transparent;
    border: none;
    outline: none;
    cursor: pointer;
`;

const Modal = (props) => {
    const {modalActive, modalContent, closeModal} = useContext(ModalContext);

    return (
        <StyledModal active={modalActive.toString()}>
            <Content>
                {modalContent}
                <Close onClick={closeModal}>
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