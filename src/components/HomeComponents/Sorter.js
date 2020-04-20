import React from 'react';
import styled from 'styled-components';

const Select = styled.select`
  width: 7rem;
  height: 2rem;
  background: white;
  /* box-shadow: 10px 10px 13px -2px rgba(0,0,0,0.29); */
  color: gray;
  /* border-radius: 10px; */
  padding-left: 0.3rem;
  font-size: 0.9rem;
  border: 1;
  margin-top: 0.2rem;
  margin-right: 14rem;

  option {
    color: black;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 1.2rem;
    padding: 0px 2px 1px;
  }

  option:nth-of-type(1){
    display: none;
  }
`;

const handleSelectChange = e => {

}

const Sorter = () => {
  return (
    <Select
      defaultValue={"default"}
      onChange={handleSelectChange}
    >
      <option value="default" disabled>PRICE</option>
      <option value="descending">Descending</option>
      <option value="ascending">Ascending</option>
    </Select>
  )
}

export default Sorter;