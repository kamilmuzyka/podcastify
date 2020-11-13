import React from 'react';
import Message from '../../../UI/Message/Message';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
    color: ${({ theme }) => theme.colors.specific}
`;

function Page404(props) {
    return (
        <Message>
            Nothing found! <StyledLink to="/">Click here</StyledLink> to go back to your library.
        </Message>
    );
}

export default Page404;