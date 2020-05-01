import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import Card from './Card';
import Spinner from '../Spinner';
import { CardContainerLayout } from './styles'

const CardContainer = () => {
    const { productsData, filteredProducts, loading } = useContext(GlobalContext)
    const currentProductData = filteredProducts.length === 0 ? productsData : filteredProducts;
    return (
        <CardContainerLayout>
            {loading ? <Spinner /> : currentProductData?.map(({ products }) =>
                <Card key={products.id} products={products} />)
            }
        </CardContainerLayout>
    )
}

export default CardContainer;