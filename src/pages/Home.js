import React from 'react';
import styled from 'styled-components';
import { Main, Sorter } from '../components';

const HomeLayout = styled.div`
  display: grid;
  grid-template-rows: 3.75rem auto;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  width: 100vw;
  height: 100vh;
  background: white;
`
const Header = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  background: white;
  /* box-shadow: rgba(0, 0, 0, 0.05) */
  -webkit-box-shadow: 0 3px 5px rgba(0, 0, 0, 0.05);
  -moz-box-shadow: 0 3px 5px rgba(0, 0, 0, 0.05);
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.05);
`


const Home = () => {
  return (
    <HomeLayout>
      <Header>
        <p style={{ paddingLeft: "9.5rem", flex: 1 }}>Women</p>
        <p style={{ paddingLeft: "3rem", paddingRight: "1rem", fontSize: "1.5rem" }}>Sort by</p>
        <Sorter />
      </Header>
      <Main />
    </HomeLayout >
  )
}

export default Home;