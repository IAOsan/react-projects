import { createContext, useContext, useEffect, useReducer } from 'react';
import { useProductsContext } from './ProductsContext';
import filterReducer from '../reducers/filterReducer';
import {
	SET_ALL_PRODUCTS,
	ACTIVE_GRID_VIEW,
	DISABLE_GRID_VIEW,
	CHANGE_SORT,
	UPDATE_SORT,
	SET_FILTERED_PRODUCTS,
	SET_FILTERED_PRODUCTS_LENGTH,
	UPDATE_FILTERS,
	SET_PRICE_RANGE,
	CLEAR_FILTERS,
	FILTER_PRODUCTS,
} from '../actions';
import { DEFAULT_FILTERS } from '../config';

const FilterContext = createContext();
export const useFilterContext = () => {
	const context = useContext(FilterContext);

	if (!context)
		throw new Error(
			'useFilterContext must be called in `FilterContextProvider`'
		);

	return context;
};

export default function FilterContextProvider({ children }) {
	const { products } = useProductsContext();
	const initialState = {
		products: [],
		filteredProducts: [],
		filteredProductsLength: 0,
		gridView: true,
		sort: 'name',
		filters: {
			...DEFAULT_FILTERS,
		},
	};
	const [state, dispatch] = useReducer(filterReducer, initialState);
	// set first load data
	useEffect(() => {
		setAllProducts(products);
		setFilteredProducts([...products]);
		setFilteredProductsLength();
		setPriceRange();
	}, [products]);
	// filter & sort functionality
	useEffect(() => {
		filterProducts();
		setFilteredProductsLength();
		changeSort();
	}, [state.filters, state.sort]);

	function setAllProducts(data) {
		dispatch({ type: SET_ALL_PRODUCTS, payload: data });
	}

	function setFilteredProducts(data) {
		dispatch({ type: SET_FILTERED_PRODUCTS, payload: data });
	}

	function setFilteredProductsLength() {
		dispatch({ type: SET_FILTERED_PRODUCTS_LENGTH });
	}

	function activeGridView() {
		if (state.gridView) return;
		dispatch({ type: ACTIVE_GRID_VIEW });
	}

	function disableGridView() {
		if (!state.gridView) return;
		dispatch({ type: DISABLE_GRID_VIEW });
	}

	function changeSort() {
		dispatch({ type: CHANGE_SORT });
	}

	function updateSort(type) {
		dispatch({ type: UPDATE_SORT, payload: type });
	}

	function setPriceRange() {
		dispatch({ type: SET_PRICE_RANGE });
	}

	function updateFilters(values) {
		dispatch({ type: UPDATE_FILTERS, payload: values });
	}

	function clearFilters() {
		dispatch({ type: CLEAR_FILTERS });
	}

	function filterProducts() {
		dispatch({ type: FILTER_PRODUCTS });
	}

	return (
		<FilterContext.Provider
			value={{
				...state,
				activeGridView,
				disableGridView,
				updateSort,
				updateFilters,
				clearFilters,
				filterProducts,
			}}
		>
			{children}
		</FilterContext.Provider>
	);
}
