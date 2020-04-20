export default (state, action) => {
    switch (action.type) {
        case "ASCENDING_PRODUCTS":
            return {
                ...state,
                productsData: action.payload.productsData.sort((a, b) => a["deaths"] - b["deaths"])
            }

        case "DESCENDING_PRODUCTS":
            return {
                ...state,
                productsData: action.payload.productsData.sort((a, b) => b["deaths"] - a["deaths"])
            }

        case "FETCH_SUCCESS":
            return {
                ...state,
                loading: false,
                productsData: action.payload
            }

        case "FETCH_ERROR":
            return {
                ...state,
                loading: true,
                error: action.payload
            }

        default:
            return state;
    }
} 