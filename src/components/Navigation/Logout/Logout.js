import React, { Fragment } from 'react';
import Button from '../../Button/Button';
import styled from 'styled-components';
import Auth from '../../../controllers/Auth';

const Element = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Paragraph = styled.p`
    margin-bottom: 1em;
`;

const ButtonConfirm = styled(Button)`
    margin-right: 0.5em;
`;

const Logout = (props) => {
    return (
        <Element>
            <Paragraph>Are you sure you want to log out?</Paragraph>
            <div>
                <ButtonConfirm type="button" outline onClick={Auth.logOut}>Yes</ButtonConfirm>
                <Button type="button" onClick={props.closeModal}>No</Button>
            </div>
        </Element>
    );
}

export default Logout;