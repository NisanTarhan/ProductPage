import React from 'react';
import { Filter, CardContainer } from '../HomeComponents';
import { MainLayout } from './styles'

const Main = () => {
    return (
        <MainLayout>
            <Filter />
            <CardContainer />
        </MainLayout>
    )
}

export default Main;