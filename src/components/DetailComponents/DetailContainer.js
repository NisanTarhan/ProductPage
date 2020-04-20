import React, { useContext } from 'react';
import styled from 'styled-components';
import { GlobalContext } from '../../context/GlobalState';
import DescriptionContainer from './DescriptionContainer';

const DetailContainerLayout = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr 3fr;
    margin-top: 3rem;
    height: inherit;
`;

const ImageContainer = styled.div`
    grid-column: 2 / 3;
    margin-bottom: 26.25rem;
`;

const Image = styled.img`
    width: 100%;
    height: 43rem;
`

const DetailContainer = ({ id }) => {
    const { getDetailOfProduct } = useContext(GlobalContext)

    const detailData = getDetailOfProduct(id);

    return (
        <DetailContainerLayout>
            <ImageContainer>
                <Image src="https://dummyimage.com/159x241" alt="product" />
            </ImageContainer>
            <DescriptionContainer
                name={detailData?.products?.name}
                price={detailData?.products?.price}
                content={detailData?.products?.content}
            />
        </DetailContainerLayout>
    )
}

export default DetailContainer;