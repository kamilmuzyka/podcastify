import React, { useState } from 'react';
import styled from 'styled-components';

const Element = styled.p`
    max-height: ${({ isOpen }) => isOpen ? '75em' : '4.5em'};
    line-height: 1.5;
    overflow: hidden;
    overflow-wrap: anywhere;
    text-overflow: ellipsis;
    transition: max-height 0.6s ease-in-out;
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