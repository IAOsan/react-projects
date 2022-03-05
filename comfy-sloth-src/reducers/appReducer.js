import { TOGGLE_NAVIGATION } from '../actions';

export default function appReducer(state, action) {
	if (action.type === TOGGLE_NAVIGATION)
		return { ...state, navigationIsOpen: !state.navigationIsOpen };

	throw new Error(
		`No matching '${action.type} - action type, appReducer.js'`
	);
}
