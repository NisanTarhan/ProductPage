import React, { createContext, useReducer, useEffect } from 'react';
import { assendingForPrice, descendingForPrice, filterByBadge, fetchData, errorDuringFetch } from './actions'
import reducer from './reducer';
import { element } from 'prop-types';

const loadFunctionWith = (productsData) => {
    function getDetailOfProduct(id) {
        return productsData.filter(({ products }) => products.id == id)[0];
    }
    return getDetailOfProduct;
}

const initialState = {
    productsData: [],
    filteredProducts: [],
    loading: false,
    error: ''
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
    GlobalProvider.propTypes = {
        children: element
    }
    const [state, dispatch] = useReducer(reducer, initialState);

    // GETTING DATA FROM API
    useEffect(() => {
        fetch('https://cimri-products.free.beeceptor.com/cimri/api/products')
            .then(response => response.json())
            .then(data => dispatch(fetchData(data)))
            .catch(error => dispatch(errorDuringFetch(error)))
    }, [])

    return (
        <GlobalContext.Provider value={{
            productsData: state.productsData,
            filteredProducts: state.filteredProducts,
            loading: state.loading,
            assendingForPrice: () => dispatch(assendingForPrice(state)),
            descendingForPrice: () => dispatch(descendingForPrice(state)),
            filterByBadge: (data) => dispatch(filterByBadge(data)),
            getDetailOfProduct: loadFunctionWith(state.productsData)
        }}>
            {children}
        </GlobalContext.Provider>
    )

}