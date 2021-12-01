import { useState, useEffect } from 'react';

export default function useFetch(url, initialValue) {
	const [data, setData] = useState(initialValue);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		AJAX();
	}, [url]);

	async function AJAX() {
		setIsLoading((prevState) => true);
		try {
			const request = await fetch(url),
				response = await request.json();

			if (!request.ok)
				throw new Error(`${request.status} ${request.statusText}`);

			setIsLoading((prevState) => false);
			setData((prevState) => {
				if (Object.keys(response)) {
					const keys = Object.keys(response);

					return response[keys[0]];
				}

				if (Array.isArray(response)) {
					return response;
				}

				return response;
			});
		} catch (error) {
			setError((prevState) => error);
		}
	}

	return [data, isLoading, error, AJAX];
}
