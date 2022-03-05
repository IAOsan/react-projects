import {
	ADD_TO_CART,
	REMOVE_ITEM,
	TOGGLE_AMOUNT,
	CLEAR_CART,
	SET_TOTALS,
} from '../actions';

export default function cartReducer(state, action) {
	if (action.type === ADD_TO_CART) {
		const { id, amount } = action.payload;
		// check if product exist in cart
		// if exist increase the amount
		// if not exist create new one
		const item = state.cart.find((item) => item.id === id);

		if (!item) {
			return { ...state, cart: [...state.cart, action.payload] };
		}

		const newAmount = item.amount + amount;
		// update item amount
		const updatedCart = state.cart.map((item) =>
			item.id === id
				? {
						...item,
						amount: newAmount > item.max ? item.max : newAmount,
				  }
				: item
		);

		return {
			...state,
			cart: updatedCart,
		};
	}

	if (action.type === REMOVE_ITEM) {
		const updatedCart = state.cart.filter(
			(item) => item.id !== action.payload
		);
		return { ...state, cart: updatedCart };
	}

	if (action.type === TOGGLE_AMOUNT) {
		const { id, amount } = action.payload;
		const updatedCart = state.cart.map((item) =>
			item.id === id ? { ...item, amount } : item
		);
		return { ...state, cart: updatedCart };
	}

	if (action.type === CLEAR_CART) {
		return { ...state, cart: [] };
	}

	if (action.type === SET_TOTALS) {
		const { totalItems, totalAmount } = state.cart.reduce(
			(acc, item) => {
				acc.totalItems += item.amount;
				acc.totalAmount += item.amount * item.price;
				return acc;
			},
			{ totalItems: 0, totalAmount: 0 }
		);

		return { ...state, totalItems, totalAmount };
	}

	throw new Error(
		`No matching '${action.type} - action type, cartReducer.js'`
	);
}
