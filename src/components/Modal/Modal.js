import React, { useContext, Fragment } from 'react';
import styled from 'styled-components';
import { ModalContext } from '../../contexts/ModalContextProvider';

const Backdrop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.75);
    z-index: 9998;
    opacity: ${props => props.active ? '1' : '0'};
    visibility: ${props => props.active ? 'visible' : 'hidden'};
    transition: opacity 0.2s ease-in-out,
                visibility 0.2s ease-in-out;
`;

const Content = styled.div`
    position: absolute;
    padding: 3em;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: var(--primary);
    border-radius: 1em;
    z-index: 9999;
    opacity: ${props => props.active ? '1' : '0'};
    visibility: ${props => props.active ? 'visible' : 'hidden'};
    transition: opacity 0.2s ease-in-out,
                visibility 0.2s ease-in-out;
`;

const Modal = (props) => {
    const { modalActive, modalContent, closeModal } = useContext(ModalContext);

    return (
        <Fragment>
            <Backdrop active={modalActive} onClick={closeModal}/>
            <Content active={modalActive}>
                { modalContent }
                <button onClick={closeModal}>Close</button>
            </Content>
        </Fragment>
    );
}

export default Modal;