import { useEffect } from 'react';

export default function useLocalStorage(key, initialValue) {
	useEffect(() => {
		localStorage.setItem(key, JSON.stringify(initialValue));
	}, [initialValue]);

	function getLocalStorage() {
		if (!localStorage.getItem(key)) {
			return [];
		}
		return JSON.parse(localStorage.getItem(key));
	}

	return {
		getLocalStorage,
	};
}
