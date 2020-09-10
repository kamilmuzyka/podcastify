import React, { Fragment } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';
import Auth from '../../controllers/Auth';
import Button from '../../UI/Button/Button';

const Backdrop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.75);
    z-index: 900;
    opacity: ${({ active }) => active ? '1' : '0'};
    visibility: ${({ active }) => active ? 'visible' : 'hidden'};
    transition: opacity 0.2s ease-in-out,
                visibility 0.2s ease-in-out;
`;

const Container = styled.div`
    position: fixed;
    display: inline-block;
    text-align: center;
    width: 90%;
    top: 50%;
    left: 50%;
    padding: 2em;
    transform: translate(-50%, -50%);
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: 1em;
    z-index: 1000;
    opacity: ${({ active }) => active ? '1' : '0'};
    visibility: ${({ active }) => active ? 'visible' : 'hidden'};
    transition: opacity 0.2s ease-in-out,
                visibility 0.2s ease-in-out;

    @media (min-width: 500px) {
        width: auto;
    }
`;

const Confirmation = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Paragraph = styled.p`
    margin-bottom: 1em;
`;

const Controls = styled.div``;

const ButtonConfirm = styled(Button)`
    margin-right: 0.5em;
`;

const Logout = ({ active, close}) => {
    return createPortal(
        <Fragment>
            <Backdrop active={active} onClick={close}/>
            <Container active={active}>
                <Confirmation>
                <Paragraph>Are you sure you want to log out?</Paragraph>
                <Controls>
                    <ButtonConfirm type="button" onClick={Auth.logOut}>Yes</ButtonConfirm>
                    <Button type="button" outline onClick={close}>No</Button>
                </Controls>
                </Confirmation>
            </Container>
        </Fragment>,
        document.getElementById('logout')
    );
}

export default Logout;