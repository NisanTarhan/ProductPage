export default (state, action) => {
    switch (action.type) {
        case "ASCENDING_PRODUCTS":
            return {
                ...state,
                productsData: action.payload.productsData.sort((a, b) => a["products"]["price"] - b["products"]["price"])
            }

        case "DESCENDING_PRODUCTS":
            return {
                ...state,
                productsData: action.payload.productsData.sort((a, b) => b["products"]["price"] - a["products"]["price"])
            }

        case "FILTER_PRODUCTS":
            return {
                ...state,
                filteredProducts: state.productsData.filter(({ products }) => {
                    return products.badges.includes(action.payload.toLowerCase())
                })
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