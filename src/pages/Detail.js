import React from 'react';
import { DetailHeader, DetailContainer } from '../components/DetailComponents';
import { DetailLayout } from './styles';

const Detail = ({ match }) => {
  return (
    <DetailLayout>
      <DetailHeader />
      <DetailContainer id={match.params.id} />
    </DetailLayout>
  )
}

export default Detail;