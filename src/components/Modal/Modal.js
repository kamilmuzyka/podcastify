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
    z-index: 900;
    opacity: ${props => props.active ? '1' : '0'};
    visibility: ${props => props.active ? 'visible' : 'hidden'};
    transition: opacity 0.2s ease-in-out,
                visibility 0.2s ease-in-out;
`;

const Content = styled.div`
    position: absolute;
    display: inline-block;
    text-align: center;
    width: 90%;
    top: 50%;
    left: 50%;
    padding: 2em;
    transform: translate(-50%, -50%);
    background-color: var(--primary);
    border-radius: 1em;
    z-index: 1000;
    opacity: ${props => props.active ? '1' : '0'};
    visibility: ${props => props.active ? 'visible' : 'hidden'};
    transition: opacity 0.2s ease-in-out,
                visibility 0.2s ease-in-out;

    @media (min-width: 500px) {
        width: auto;
    }
`;

const Modal = (props) => {
    const { modalActive, modalContent, closeModal } = useContext(ModalContext);

    return (
        <Fragment>
            <Backdrop active={modalActive} onClick={closeModal}/>
            <Content active={modalActive}>
                { modalContent }
            </Content>
        </Fragment>
    );
}

export default Modal;