import { createContext, useState } from 'react';
import useFetch from '../hooks/useFetch';
import { API_KEY, BASE_API_URL } from '../config';

export const moviesContext = createContext();
export default function MoviesProvider({ children }) {
	const [query, setQuery] = useState('batman');
	const [data, isLoading, error] = useFetch(
		`${BASE_API_URL}/?s=${query}&${API_KEY}`,
		[]
	);

	return (
		<moviesContext.Provider
			value={{
				data: data.Search || [],
				isLoading,
				error: error || data.Error || null,
				setQuery,
			}}
		>
			{children}
		</moviesContext.Provider>
	);
}
