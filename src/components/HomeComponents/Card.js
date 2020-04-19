import React from 'react';
import styled from 'styled-components';

const CardLayout = styled.div`
    display: flex;
    flex-direction: column;
    width: 16.5rem;
    height: 30rem;
    box-shadow: 6px 9px 34px 0px rgba(0,0,0,0.75);
    cursor: pointer;
    border: 1px solid #008CBA;
    /* border-radius: 0.7rem; */
    transition: transform 0.25s ease-out;
    font-size: 1rem;
    position: relative;

    &:hover {
        /* transform: scale(1.05); */
        /* color: red; */
    }
`
const Image = styled.img`
    width: 100%;
    height: 24.4rem;
    /* background: white; */
    margin-bottom: 0.75rem;
  
`

const Text = styled.text`
    padding-left: 7px;
    padding-bottom: 3px;
`

const Badge = styled.p`
    text-align: center;
    width: 3.13rem;
    height: 1.25rem;
    background: rgb(255, 96, 8);
    left: 10px;
    position: absolute;
    font-size: 0.8rem;
    border-radius: 3px;
    color: white;
`

const Card = () => {
    return (
        <CardLayout>
            <Image src="https://www.countryflags.io/tr/flat/64.png" alt="product" />
            <Badge>NEW</Badge>
            <Text>Pueraria Mirifica And Study Phyto</Text>
            <Text>Estrogens</Text>
            <Text>$599.00</Text>
        </CardLayout>
    )
}

export default Card;