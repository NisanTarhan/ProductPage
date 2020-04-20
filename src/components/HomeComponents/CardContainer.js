import React, { useContext } from 'react';
import styled from 'styled-components';
import { GlobalContext } from '../../context/GlobalState';
import Card from './Card';
import Spinner from '../Spinner';

const CardContainerLayout = styled.div`
    margin-right: 9.3rem;
    margin-left: 1.5rem ;
    display: grid;
    grid-template-columns: repeat(auto-fill,minmax(15rem, 1fr));
    grid-gap: 2rem;
    /* background: red; */
`

const CardContainer = () => {
    const { productsData, loading } = useContext(GlobalContext)
    return (
        <CardContainerLayout>
            {loading ? <Spinner /> : productsData?.map(({ products }) =>
                <Card key={products.id} products={products} />)
            }
        </CardContainerLayout>
    )
}

export default CardContainer;