import { createContext, useContext, useEffect, useReducer } from 'react';
import cartReducer from '../reducers/cartReducer';
import {
	ADD_TO_CART,
	REMOVE_ITEM,
	TOGGLE_AMOUNT,
	CLEAR_CART,
	SET_TOTALS,
} from '../actions';

const CartContext = createContext();

export const useCartContext = () => {
	const context = useContext(CartContext);

	if (!context)
		throw new Error(
			'useCartContext must be called in `CartContextProvider`'
		);

	return context;
};

export default function CartContextProvider({ children }) {
	const initialState = {
		cart: getLocalStorage('cart'),
		totalItems: 0,
		totalAmount: 0,
		shippingFree: 534,
	};
	const [state, dispatch] = useReducer(cartReducer, initialState);

	useEffect(() => {
		setLocalStorage('cart', state.cart);
		setTotals();
	}, [state.cart]);

	function addToCart(item) {
		dispatch({ type: ADD_TO_CART, payload: item });
	}

	function clearCart() {
		console.log('clear cart');
		dispatch({ type: CLEAR_CART });
	}

	function removeItem(id) {
		dispatch({ type: REMOVE_ITEM, payload: id });
	}

	function toggleAmount(newAmount) {
		dispatch({ type: TOGGLE_AMOUNT, payload: newAmount });
	}

	function setTotals() {
		dispatch({ type: SET_TOTALS });
	}

	function setLocalStorage(key, value) {
		localStorage.setItem(key, JSON.stringify(value));
	}

	function getLocalStorage(key) {
		const data = JSON.parse(localStorage.getItem(key));
		if (!data) {
			return [];
		}
		return data;
	}

	return (
		<CartContext.Provider
			value={{ ...state, addToCart, clearCart, toggleAmount, removeItem }}
		>
			{children}
		</CartContext.Provider>
	);
}
