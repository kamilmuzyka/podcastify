import React from 'react';
import styled from 'styled-components';
import Close from '../Close/Close';

const Element = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    z-index: 9999;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
`;

const Content = styled.div`
    display: inline-block;
    position: absolute;
    top: 50%;
    left: 50%;
    border-radius: 1em;
    transform: translate(-50%, -50%);
    background-color: white;
    padding: 5em;
    color: black;

    svg {
        position: absolute;
        top: 1.5em;
        right: 1.5em;
    }
`;

function Modal(props) {
    return (
        <Element>
            <Content>
                <Close/>
                {props.children}
            </Content>
        </Element>
    );
}

export default Modal;