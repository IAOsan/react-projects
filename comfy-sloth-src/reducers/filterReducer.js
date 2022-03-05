import {
	SET_ALL_PRODUCTS,
	ACTIVE_GRID_VIEW,
	DISABLE_GRID_VIEW,
	SET_FILTERED_PRODUCTS,
	SET_FILTERED_PRODUCTS_LENGTH,
	CHANGE_SORT,
	UPDATE_SORT,
	UPDATE_FILTERS,
	SET_PRICE_RANGE,
	CLEAR_FILTERS,
	FILTER_PRODUCTS,
} from '../actions';
import { DEFAULT_FILTERS } from '../config';

export default function filterReducer(state, action) {
	function compare(a, b, reverse) {
		if (reverse) {
			if (a < b) return 1;
			if (a > b) return -1;
		} else {
			if (a < b) return -1;
			if (a > b) return 1;
		}
		return 0;
	}

	if (action.type === SET_ALL_PRODUCTS) {
		return { ...state, products: action.payload };
	}

	if (action.type === SET_FILTERED_PRODUCTS_LENGTH) {
		return {
			...state,
			filteredProductsLength: state.filteredProducts.length,
		};
	}

	if (action.type === SET_FILTERED_PRODUCTS) {
		return { ...state, filteredProducts: action.payload };
	}

	if (action.type === ACTIVE_GRID_VIEW) {
		return { ...state, gridView: true };
	}

	if (action.type === DISABLE_GRID_VIEW) {
		return { ...state, gridView: false };
	}

	if (action.type === CHANGE_SORT) {
		const sortBy = {
			name: [...state.filteredProducts].sort((a, b) =>
				compare(a.name, b.name)
			),
			nameReverse: [...state.filteredProducts].sort((a, b) =>
				compare(a.name, b.name, true)
			),
			price: [...state.filteredProducts].sort((a, b) =>
				compare(a.price, b.price, true)
			),
			priceReverse: [...state.filteredProducts].sort((a, b) =>
				compare(a.price, b.price)
			),
		};

		return {
			...state,
			filteredProducts: sortBy[state.sort] || sortBy.name,
		};
	}

	if (action.type === UPDATE_SORT) {
		return { ...state, sort: action.payload };
	}

	if (action.type === UPDATE_FILTERS) {
		const { name, value } = action.payload;
		return { ...state, filters: { ...state.filters, [name]: value } };
	}

	if (action.type === SET_PRICE_RANGE) {
		const maxPrice = Math.max(...state.products.map((item) => item.price));
		return {
			...state,
			filters: { ...state.filters, maxPrice, price: maxPrice },
		};
	}

	if (action.type === CLEAR_FILTERS) {
		const { maxPrice, price } = state.filters;

		return {
			...state,
			filters: { ...DEFAULT_FILTERS, maxPrice, price },
			filteredProducts: state.products,
		};
	}

	if (action.type === FILTER_PRODUCTS) {
		const {
			query,
			category,
			company,
			colors,
			price,
			maxPrice,
			freeShipping,
		} = state.filters;
		let filteredProducts = [...state.products];

		if (query) {
			filteredProducts = filteredProducts.filter((item) =>
				item.name.includes(query.trim().toLowerCase())
			);
		}

		if (category !== 'all') {
			filteredProducts = filteredProducts.filter(
				(item) => item.category === category
			);
		}

		if (company !== 'all') {
			filteredProducts = filteredProducts.filter(
				(item) => item.company === company
			);
		}

		if (colors !== 'all') {
			filteredProducts = filteredProducts.filter((item) =>
				item.colors.includes(colors)
			);
		}

		if (price !== maxPrice) {
			filteredProducts = filteredProducts.filter(
				(item) => item.price <= price
			);
		}

		if (freeShipping) {
			filteredProducts = filteredProducts.filter((item) => item.shipping);
		}

		return { ...state, filteredProducts };
	}

	throw new Error(
		`No matching '${action.type}' action type, filterReducer.js`
	);
}
