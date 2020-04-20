import React from 'react';
import styled from 'styled-components';
import { DetailHeader, DetailContainer } from '../components/DetailComponents';

const DetailLayout = styled.div`
  display: grid;
  grid-template-rows: 2.5rem 5rem 5rem auto;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  width: 100vw;
  height: 100vh;
  background: white;
`

const Detail = ({ match }) => {
  return (
    <DetailLayout>
      <DetailHeader />
      <DetailContainer id={match.params.id} />
    </DetailLayout>
  )
}

export default Detail;