import {
    ASCENDING_PRODUCTS,
    DESCENDING_PRODUCTS,
    FILTER_PRODUCTS,
    FETCH_SUCCESS,
    FETCH_ERROR
} from './types';

export function assendingForPrice(state) {
    return {
        type: ASCENDING_PRODUCTS,
        payload: { ...state }
    }
};

export function descendingForPrice(state) {
    return {
        type: DESCENDING_PRODUCTS,
        payload: { ...state }
    }
};

export function filterByBadge(data) {
    return {
        type: FILTER_PRODUCTS,
        payload: data
    }
};

export function fetchData(data) {
    return {
        type: FETCH_SUCCESS,
        payload: data
    }
};

export function errorDuringFetch(error) {
    return {
        type: FETCH_ERROR,
        payload: error
    }
};