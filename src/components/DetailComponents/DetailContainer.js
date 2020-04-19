import React from 'react';
import styled from 'styled-components';
import DescriptionContainer from './DescriptionContainer';

const DetailContainerLayout = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr 3fr;
    margin-top: 3rem;
`;

const ImageContainer = styled.div`
    grid-column: 2 / 3;
    margin-bottom: 26.25rem;
`;

const Image = styled.img`
    width: 100%;
    height: 43rem;
`

const DetailContainer = () => {
    return (
        <DetailContainerLayout>
            <ImageContainer>
                <Image src="https://www.countryflags.io/tr/flat/64.png" alt="product" />
            </ImageContainer>
            <DescriptionContainer />
        </DetailContainerLayout>
    )
}

export default DetailContainer;