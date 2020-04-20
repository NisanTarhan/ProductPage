import React from 'react';
import styled from 'styled-components';
import { Filter, CardContainer } from '../HomeComponents';

const MainLayout = styled.div`
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-template-rows: 1fr 7.5rem;
    margin-top: 3rem;
    background: white;
`

const Main = () => {
    return (
        <MainLayout>
            <Filter />
            <CardContainer />
        </MainLayout>
    )
}

export default Main;