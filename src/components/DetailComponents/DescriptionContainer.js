import React from 'react';
import { DescriptionContainerLayout, Title, Price, DescriptionTitle, DescriptionArea } from './styles';

const DescriptionContainer = ({ name, price, content }) => {
    return (
        <DescriptionContainerLayout>
            <Title>{name}</Title>
            <Price>${price}</Price>
            <DescriptionTitle>Description</DescriptionTitle>
            <DescriptionArea>
                {content}
            </DescriptionArea>
        </DescriptionContainerLayout>
    )
}

export default DescriptionContainer;