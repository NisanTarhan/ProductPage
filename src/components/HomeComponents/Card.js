import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const CardLayout = styled.div`
    display: flex;
    flex-direction: column;
    width: 16.5rem;
    height: 30rem;
    box-shadow: 6px 9px 34px 0px rgba(0,0,0,0.15);
    cursor: pointer;
    color: black;
    /* border-radius: 0.7rem; */
    transition: transform 0.25s ease-out;
    position: relative;
`
const Image = styled.img`
    width: 100%;
    height: 24.4rem;
    border-radius: 3px;
    margin-bottom: 0.75rem;
`

const Text = styled.p`
    font-size: 1rem;
    padding-left: 7px;
    padding-bottom: 5px;
    margin: 0;
    line-height: 1.6rem;
    color: rgb(51, 51, 58);
`

const PriceTag = styled.p`
    font-size: 0.9rem;
    padding-left: 7px;
    padding-bottom: 5px;
    margin: 0;
    line-height: 1.6rem;
    color: rgb(51, 51, 58);
`

const Badge = styled.p`
    text-align: center;
    width: 4.5rem;
    height: 1.25rem;
    background: rgb(255, 96, 8);
    left: 0.6rem;
    position: absolute;
    font-size: 0.8rem;
    border-radius: 3px;
    color: white;
`

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