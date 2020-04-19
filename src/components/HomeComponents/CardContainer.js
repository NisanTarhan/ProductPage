import React from 'react';
import styled from 'styled-components';
import Card from './Card';

const CardContainerLayout = styled.div`
    margin-right: 9.3rem;
    margin-left: 1.5rem ;
    display: grid;
    grid-template-columns: repeat(auto-fill,minmax(15rem, 1fr));
    grid-gap: 2rem;
    /* background: red; */
`

const CardContainer = () => {
    return (
        <CardContainerLayout>
            <Card />
        </CardContainerLayout>
    )
}

export default CardContainer;