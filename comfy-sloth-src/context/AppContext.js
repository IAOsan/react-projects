import { createContext, useContext, useReducer } from 'react';
import appReducer from '../reducers/appReducer';
import { TOGGLE_NAVIGATION } from '../actions';

const AppContext = createContext();
export const useAppContext = () => {
	const context = useContext(AppContext);

	if (!context)
		throw new Error(`'useAppContext' must be call in 'AppContextProvider'`);

	return context;
};

export default function AppContextProvider({ children }) {
	const initialState = {
		navigationIsOpen: false,
	};
	const [state, dispatch] = useReducer(appReducer, initialState);

	function toggleNavigation() {
		dispatch({ type: TOGGLE_NAVIGATION });
	}

	return (
		<AppContext.Provider value={{ ...state, toggleNavigation }}>
			{children}
		</AppContext.Provider>
	);
}
