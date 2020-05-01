import React from 'react';
import { NavBar, NavBarTitle, EmptyLayout, Text, DescriptionText, DescriptionTextLayout } from './styles';

const DetailHeader = () => {
    return (
        <>
            <DescriptionTextLayout>
                <DescriptionText>International Shipping available! Free shipping for orders above USD 150Type something</DescriptionText>
            </DescriptionTextLayout>
            <NavBar>
                <NavBarTitle>matter</NavBarTitle>
                <Text>SHOP</Text>
                <Text>FABRIC</Text>
                <Text>JOURNAL</Text>
                <Text>ABOUT</Text>
            </NavBar>
            <EmptyLayout>

            </EmptyLayout>
        </>
    )
}

export default DetailHeader;