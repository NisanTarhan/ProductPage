import React, { useContext } from 'react';
import { string } from 'prop-types';
import { GlobalContext } from '../../context/GlobalState';
import DescriptionContainer from './DescriptionContainer';
import { DetailContainerLayout, ImageContainer, Image } from './styles';

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

DetailContainer.propTypes = {
    id: string.isRequired
}

export default DetailContainer;