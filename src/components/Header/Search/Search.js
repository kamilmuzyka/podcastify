import React, { useState } from 'react';
import { withRouter } from 'react-router';
import styled from 'styled-components';
import Button from '../../../UI/Button/Button';

const Form = styled.form`
    display: flex;

    @media (min-width: 500px) {
        margin-right: 4em;
    }

    @media (min-width: 1024px) {
        margin-right: calc(1em + 10px);
    }
`;

const StyledButton = styled(Button)`
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
        font-size: 0.9em;
`;

const Input = styled.input`
    flex: 1;
    padding: 0.5em 0 0.5em 1em;
    font: inherit;
    font-size: 0.9em;
    border: none;
    border-top-left-radius: 100px;
    border-bottom-left-radius: 100px;
    outline: none;

    @media (min-width: 1024px) {
        min-width: 225px;
    }
`;

function Search({ history }) {
    const [query, updateQuery] = useState('');

    const handleInputChange = (e) => {
        updateQuery(e.target.value);
    }

    const handleFormSubmission = (e) => {
        e.preventDefault();
        if(query.length > 0) {
            history.push('/search?query=' + query);
        }
    }

    return (
        <Form onSubmit={handleFormSubmission}>
            <Input type="text" placeholder="Type here" onChange={handleInputChange}/>
            <StyledButton type="submit">Search</StyledButton>
        </Form>
    );
}

export default withRouter(Search);