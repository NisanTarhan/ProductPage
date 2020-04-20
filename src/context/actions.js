export function assendingForDeaths(state) {
    return {
        type: "ASCENDING_PRODUCTS",
        payload: { ...state }
    }
};

export function descendingForDeaths(state) {
    return {
        type: "DESCENDING_PRODUCTS",
        payload: { ...state }
    }
};


export function fetchData(data) {
    return {
        type: "FETCH_SUCCESS",
        payload: data
    }
}

export function errorDuringFetch(error) {
    return {
        type: "FETCH_ERROR",
        payload: error
    }

}