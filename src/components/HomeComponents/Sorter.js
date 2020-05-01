import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import { Select } from './styles';

const Sorter = () => {
  const { assendingForPrice, descendingForPrice } = useContext(GlobalContext);

  const handleSelectChange = e => {
    if (e.target.value === "descending") {
      descendingForPrice();
    } else {
      assendingForPrice();
    }
  };

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