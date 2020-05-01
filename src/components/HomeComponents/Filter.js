import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import { FilterLayout, FilterInput } from './styles';

const Filter = () => {
    const { filterByBadge } = useContext(GlobalContext);

    const handleSearchInput = e => {
        filterByBadge(e.target.value)
    }

    return (
        <FilterLayout>
            <FilterInput
                type="search"
                placeholder="FILTERS"
                onChange={handleSearchInput}
            />
        </FilterLayout>
    )
}

export default Filter;