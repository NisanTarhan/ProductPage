import React from 'react';
import styled from 'styled-components';

const DescriptionContainerLayout = styled.div`
    margin-left: 1.5rem;
    margin-right: 9.5rem;
`
const Title = styled.p`
    font-weight: bold;
    font-size: 1.5rem;
    line-height: 1.9rem;
    color: rgb(3, 3, 3);
    margin-bottom: 9px;
`

const Price = styled.div`
    font-size: 1.5rem;
    line-height: 1.9rem;
    color: rgb(255, 96, 8);
    margin-bottom: 1.19rem;
`;

const DescriptionTitle = styled.p`
    font-size: 1.12rem;
    line-height: 1.9rem;
    padding-left: 0.6rem;
`;

const DescriptionArea = styled.div`
    font-size: 1rem;
    line-height: 1.25rem;
    padding-left: 0.6rem;
    padding-bottom: 1.25rem;
`;

const DescriptionContainer = () => {
    return (
        <DescriptionContainerLayout>
            <Title>The Sideswept Dhoti + Bottom Line Grey (Silk)</Title>
            <Price>SGD 139.90</Price>
            <DescriptionTitle>Description</DescriptionTitle>
            <DescriptionArea>
                Inspired by the continuous length of the lunghi or sarong seen in hot climates everywhere from South Asia to the Horn of Africa and southern Arabian pen…
            </DescriptionArea>
        </DescriptionContainerLayout>
    )
}

export default DescriptionContainer;