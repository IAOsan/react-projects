import { useEffect, useState } from 'react';

export default function useFetch(url, initialValue) {
	const [data, setData] = useState(initialValue);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		(async function () {
			setIsLoading((prevState) => true);
			try {
				const request = await fetch(url),
					response = await request.json();

				if (!request.ok)
					throw new Error(
						`oops: ${request.status} ${request.statusText}`
					);

				setIsLoading((prevState) => false);
				setData((prevState) => response);
			} catch (error) {
				setIsLoading((prevState) => false);
				setError((prevState) => error);
			}
		})();
	}, [url]);

	return [data, isLoading, error];
}
