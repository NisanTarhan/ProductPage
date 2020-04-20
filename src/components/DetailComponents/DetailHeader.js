import React from 'react';
import styled from 'styled-components';

const NavBar = styled.div`
   display: flex;
   align-items: center;
  -webkit-box-shadow: 0 3px 5px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0 3px 5px rgba(0, 0, 0, 0.1);
   box-shadow: 0 3px 5px rgba(0, 0, 0, 0.1); 
`;

const EmptyLayout = styled.div`
  -webkit-box-shadow: 0 3px 5px rgba(0, 0, 0, 0.05);
  -moz-box-shadow: 0 3px 5px rgba(0, 0, 0, 0.05);
   box-shadow: 0 3px 5px rgba(0, 0, 0, 0.05); 
`

const Text = styled.p`
    padding-bottom: 0.8rem;
    font-size: 0.75rem;
    line-height: 2.5rem;
    padding: 1rem;
    font-weight: bold;
`;

const DetailHeader = () => {
    return (
        <>
            <div style={{ background: "black", textAlign: "center" }}>
                <p style={{ color: "white", marginTop: "12px", fontSize: "12px" }}>International Shipping available! Free shipping for orders above USD 150Type something</p>
            </div>
            <NavBar>
                <p style={{ paddingLeft: "9.4rem", paddingBottom: "0.8rem", paddingRight: "0.8rem", fontSize: "3rem" }}>matter</p>
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