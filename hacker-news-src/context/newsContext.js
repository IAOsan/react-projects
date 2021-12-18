import { createContext, useEffect, useReducer } from 'react';
import reducer from '../reducer/reducer';
import useFetch from '../hooks/useFetch';
import {
	SET_PAGE,
	SET_QUERY,
	SET_TOTAL_PAGES,
	SET_NEWS,
	ON_REMOVE,
} from '../reducer/actions';
import { BASE_API_URL } from '../config';

export const newsContext = createContext();

export default function NewsProvider({ children }) {
	const initialState = {
		hits: [],
		query: 'react',
		page: 0,
		totalPages: 0,
	};
	const [state, dispatch] = useReducer(reducer, initialState);
	const [data, isLoading, error] = useFetch(
		`${BASE_API_URL}/search?query=${state.query}&page=${state.page}`,
		{}
	);

	useEffect(() => {
		setNews(data.hits);
		setTotalPages(data.nbPages - 1);
	}, [data]);

	function setNews(data) {
		dispatch({ type: SET_NEWS, hits: data });
	}

	function setPage(page) {
		dispatch({ type: SET_PAGE, page });
	}

	function setQuery(str) {
		dispatch({ type: SET_QUERY, query: str });
	}

	function setTotalPages(total) {
		dispatch({ type: SET_TOTAL_PAGES, total });
	}

	function handleSearch(str) {
		setQuery(str);
		setPage(0);
	}

	function onRemove(id) {
		dispatch({ type: ON_REMOVE, id });
	}

	return (
		<newsContext.Provider
			value={{
				...state,
				isLoading,
				error,
				setPage,
				handleSearch,
				onRemove,
			}}
		>
			{children}
		</newsContext.Provider>
	);
}
