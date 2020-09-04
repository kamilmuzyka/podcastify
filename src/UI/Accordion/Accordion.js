import React, { useState } from 'react';
import styled from 'styled-components';

const Element = styled.p`
    display: inline-block;
    word-wrap: break-word;
    overflow: hidden;
    text-overflow: ellipsis;
    max-height: ${({ isOpen }) => isOpen ? '25em' : '3.75em'};
    line-height: 1.25em;
    transition: max-height 0.3s ease-in-out;
    cursor: pointer;
`;

const Accordion = (props) => {

    const [isOpen, updateIsOpen] = useState(false);

    const toggleHandler = () => {
        updateIsOpen(prev => !prev);
    }

    return (
        <Element {...props} isOpen={isOpen} onClick={toggleHandler}>
            {props.children}
        </Element>
    );
}

export default Accordion;