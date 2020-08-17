import React, { useContext, useState } from 'react';
import { withRouter } from 'react-router';
import styled from 'styled-components';
import { SearchContext } from '../../../contexts/SearchContextProvider';
import Button from '../../../UI/Button/Button';

const Form = styled.form`
    button {
        margin-right: calc(1em + 10px);
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
        font-size: 0.9em;
    }
`;

const Input = styled.input`
    padding: 0.5em 1em;
    min-width: 225px;
    font: inherit;
    font-size: 0.9em;
    border: none;
    border-top-left-radius: 100px;
    border-bottom-left-radius: 100px;
    outline: none;
`;

function Search(props) {
    const { updateQuery } = useContext(SearchContext);
    const { updateSearching } = useContext(SearchContext);
    const [currentQuery, updateCurrentQuery] = useState('');

    const handleChange = (e) => {
        const query = e.target.value;
        updateCurrentQuery(query);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(currentQuery.length > 0) {
            updateSearching(true);
            updateQuery(currentQuery);
            props.history.push(`/search`);
        }
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Input type="text" placeholder="Search" onChange={handleChange}/>
            <Button type="submit">Search</Button>
        </Form>
    );
}

export default withRouter(Search);