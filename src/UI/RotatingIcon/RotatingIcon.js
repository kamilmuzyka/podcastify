import React from 'react';
import styled from 'styled-components';

const Element = styled.div`
    display: inline-block;
    width: 80px;
    height: 80px;

    & div {
        box-sizing: border-box;
        display: block;
        position: absolute;
        width: 64px;
        height: 64px;
        margin: 8px;
        border: 8px solid ${({ theme }) => theme.colors.positive};
        border-radius: 50%;
        animation: spin 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
        border-color: ${({ theme }) => theme.colors.positive} transparent transparent transparent;
    }

    & div:nth-child(1) {
        animation-delay: -0.45s;
    }

    & div:nth-child(2) {
        animation-delay: -0.3s;
    }

    & div:nth-child(3) {
        animation-delay: -0.15s;
    }

    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`;

function RotatingIcon(props) {
    return (
        <Element className={props.className}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </Element>
    );
}

export default RotatingIcon;