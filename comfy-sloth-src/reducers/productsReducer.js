import {
	SET_IS_LOADING,
	SET_ALL_PRODUCTS,
	SET_FEATURED_PRODUCTS,
	SET_ERROR,
	SET_SINGLE_PRODUCT,
} from '../actions';

export default function productsReducer(state, action) {
	if (action.type === SET_IS_LOADING) {
		return { ...state, isLoading: action.payload };
	}
	if (action.type === SET_ALL_PRODUCTS) {
		return { ...state, products: action.payload };
	}
	if (action.type === SET_FEATURED_PRODUCTS) {
		const featuredProducts = action.payload.filter((item) => item.featured);
		return { ...state, featuredProducts };
	}
	if (action.type === SET_ERROR) {
		return { ...state, error: action.payload };
	}
	if (action.type === SET_SINGLE_PRODUCT) {
		return { ...state, singleProduct: action.payload };
	}

	throw new Error(
		`No matching '${action.type}' action type, productsReducer.js`
	);
}
