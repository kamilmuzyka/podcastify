import React from 'react';
import styled from 'styled-components';

const Outer = styled.button`
    position: relative;
    width: 40px;
    height: 15px;
    background-color: ${({ active, theme }) => active ? theme.colors.accent : theme.colors.touch};
    border: none;
    border-radius: 30px;
    outline: none;
    cursor: pointer;
`;

const Inner = styled.div`
    position: absolute;
    top: 50%;
    width: 17px;
    height: 17px;
    transform: translate(${({ active }) => active ? '23px' : '0'}, -50%);
    transition: transform 0.2s ease-in-out;
    background-color: #FFFFFF;
    border: 1px solid #AAAAAA;
    border-radius: 15px;
`;

function ToggleButton({ active, ...rest}) {
    return (
        <Outer {...rest}>
            <Inner active={active}/>
        </Outer>
    );
}

export default ToggleButton;