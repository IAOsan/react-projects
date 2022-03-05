import { createContext, useContext, useEffect, useReducer } from 'react';
import productsReducer from '../reducers/productsReducer';
import {
	SET_IS_LOADING,
	SET_ALL_PRODUCTS,
	SET_FEATURED_PRODUCTS,
	SET_ERROR,
	SET_SINGLE_PRODUCT,
} from '../actions';
import {
	API_URL_ALL_PRODUCTS,
	API_URL_SINGLE_PRODUCT,
	TIME_TO_REDIRECT,
} from '../config';
import { createError, formatError } from '../helpers';

const ProductsContext = createContext();

export const useProductsContext = () => {
	const context = useContext(ProductsContext);

	if (!context)
		throw new Error(
			'useProductsContext must be called in "ProductsContextProvider"'
		);

	return context;
};

export default function ProductsContextProvider({ children }) {
	const initialState = {
		products: [],
		featuredProducts: [],
		singleProduct: {},
		isLoading: false,
		error: null,
	};
	const [state, dispatch] = useReducer(productsReducer, initialState);

	useEffect(() => {
		(async function () {
			setIsLoading(true);
			try {
				const response = await fetch(`${API_URL_ALL_PRODUCTS}`);
				if (!response.ok) {
					const error = createError(
						'all-products',
						response.status,
						response.statusText
					);
					throw new Error(error);
				}
				const data = await response.json();
				setAllProducts(data);
				setFeaturedProducts(data);
				setIsLoading(false);
			} catch (error) {
				setError(formatError(error));
				setIsLoading(false);
			}
		})();
	}, []);

	function setIsLoading(bool) {
		dispatch({ type: SET_IS_LOADING, payload: bool });
	}

	function setAllProducts(data) {
		dispatch({ type: SET_ALL_PRODUCTS, payload: data });
	}

	function setFeaturedProducts(data) {
		dispatch({ type: SET_FEATURED_PRODUCTS, payload: data });
	}

	function setError(error) {
		dispatch({ type: SET_ERROR, payload: error });
	}

	function setSingleProduct(data) {
		dispatch({ type: SET_SINGLE_PRODUCT, payload: data });
	}

	function handleRedirectOnError(redirect, pathname) {
		setTimeout(() => {
			redirect(pathname);
			setError(null);
		}, TIME_TO_REDIRECT * 1000);
	}

	async function fetchSingleProduct(id) {
		try {
			setIsLoading(true);
			const response = await fetch(`${API_URL_SINGLE_PRODUCT}?id=${id}`);

			if (!response.ok) {
				const error = createError(
					'single-product',
					response.status,
					response.statusText
				);
				throw new Error(error);
			}

			const data = await response.json();

			setSingleProduct(data);
			setIsLoading(false);
		} catch (error) {
			setError(formatError(error));
			setIsLoading(false);
		}
	}

	return (
		<ProductsContext.Provider
			value={{ ...state, fetchSingleProduct, handleRedirectOnError }}
		>
			{children}
		</ProductsContext.Provider>
	);
}
