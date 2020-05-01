import React from 'react';
import { Link } from 'react-router-dom';
import { CardLayout, Image, Badge, Text, PriceTag } from './styles';

const Card = ({ products }) => {
    //ImageUrl does not come properly from API, so the card image is static.
    const { id, name, price, badges, imageUrl } = products

    return (
        <Link to={`/detail/${id}`} style={{ textDecoration: 'none' }}>
            <CardLayout>
                <Image src={"https://dummyimage.com/159x241"} alt="product" />
                <Badge>{badges[0].toUpperCase()}</Badge>
                <Text>{name}</Text>
                <PriceTag>${price}</PriceTag>
            </CardLayout>
        </Link>
    )
}

export default Card;