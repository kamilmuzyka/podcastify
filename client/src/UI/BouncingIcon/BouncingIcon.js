import React from 'react';
import styled from 'styled-components';

const Icon = styled.div`
    margin: 0 auto;
    font-size: 10px;
    width: 4em;
    height: 3em;
    border-radius: 50%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Point = styled.span`
    display: block;
    margin: 0.2em;
    width: 0.8em;
    height: 0.8em;
    border-radius: 50%;
    background-color: #FFFFFF;
    @keyframes bounce {
        100% {
            opacity: 0;
            transform: scale(0.5);
        }
    }

    &:nth-of-type(1) {
        order: 1;
        animation: bounce 0.75s 0s infinite ease-in-out alternate;
    }

    &:nth-of-type(2) {
        order: 2;
        animation: bounce 0.75s 0.3s infinite ease-in-out alternate;
    }

    &:nth-of-type(3) {
        order: 3;
        animation: bounce 0.75s 0.6s infinite ease-in-out alternate;
    }
`;

function BouncingIcon(props) {
    return (
        <Icon {...props}>
            <Point/>
            <Point/>
            <Point/>
        </Icon>
    );
}

export default BouncingIcon;