import React from 'react';
import { Main, Sorter } from '../components/HomeComponents';
import { HomeLayout, Header, GenderTag, SortTag } from './styles'

const Home = () => {
  return (
    <HomeLayout>
      <Header>
        <GenderTag>Women</GenderTag>
        <SortTag>Sort by</SortTag>
        <Sorter />
      </Header>
      <Main />
    </HomeLayout >
  )
}

export default Home;