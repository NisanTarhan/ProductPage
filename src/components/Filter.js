import React from 'react';
import styled from 'styled-components';

const FilterLayout = styled.div`
    display: flex;
    justify-content: flex-end;
`

const FilterInput = styled.input`
    height: 2.5rem;
    width: 13rem;
   -webkit-box-shadow: 0px 10px 12px 0px rgba(0,0,0,0.08);
    -moz-box-shadow: 0px 10px 12px 0px rgba(0,0,0,0.08);
    box-shadow: 0px 10px 12px 0px rgba(0,0,0,0.08);
    border: 0px solid gray;
    border-radius: 2px;
    padding: 0.6rem;
    letter-spacing: 1px;
    font-size: 1rem;
    background: white;
`

const Filter = () => {
    return (
        <FilterLayout>
            <FilterInput
                type="search"
                placeholder="FILTER"
            />
        </FilterLayout>
    )
}

export default Filter;