import React from 'react';
import styled from 'styled-components';
import { Filter, CardContainer } from '../components';

const MainLayout = styled.div`
    display: grid;
    grid-template-columns: 1fr 3fr;
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