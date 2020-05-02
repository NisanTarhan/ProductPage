import React from 'react';
import { string, number } from 'prop-types';
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

DescriptionContainer.propTypes = {
    name: string,
    price: number,
    content: string
}

DescriptionContainer.defaultProps = {
    name: "Unknown",
    price: 0,
    content: "Unknown Description"
}

export default DescriptionContainer;