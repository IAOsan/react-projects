import { createContext, useEffect, useState } from 'react';
import useFetch from '../hooks/useFetch';
import { API_URL, RESULTS_PER_PAGE } from '../config';

export const recipesContext = createContext();

export default function RecipesProvider({ children }) {
	const [query, setQuery] = useState('');
	const [data, isLoading, error] = useFetch(API_URL + query, {}); //data = {drinks}
	const [page, setPage] = useState(1);
	const [pagination, setPagination] = useState({});

	useEffect(() => {
		setPage((prevState) => 1);
	}, [query]);

	useEffect(() => {
		const from = (page - 1) * RESULTS_PER_PAGE,
			to = page * RESULTS_PER_PAGE;

		setPagination((prevState) => ({
			drinks: data.drinks?.slice(from, to),
		}));
	}, [page, data.drinks]);

	function handleSearch(name) {
		if (!Object.keys(data).length) return;

		setQuery((prevState) => name);
	}

	return (
		<recipesContext.Provider
			value={{
				data: pagination,
				isLoading,
				error,
				handleSearch,
				page,
				setPage,
				totalPages: Math.ceil(data.drinks?.length / RESULTS_PER_PAGE),
			}}
		>
			{children}
		</recipesContext.Provider>
	);
}
