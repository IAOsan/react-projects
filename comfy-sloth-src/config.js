export const API_URL_ALL_PRODUCTS =
	'http://course-api.com/react-store-products';
export const API_URL_SINGLE_PRODUCT =
	'http://course-api.com/react-store-single-product';
export const CLIENT_ID = process.env.REACT_APP_AUTH_CLIENT_ID;
export const DOMAIN = process.env.REACT_APP_AUTH_DOMAIN;
export const TIME_TO_REDIRECT = 3;
export const DEFAULT_FILTERS = {
	query: '',
	category: 'all',
	company: 'all',
	colors: 'all',
	minPrice: 0,
	maxPrice: 0,
	price: '',
	freeShipping: false,
};
