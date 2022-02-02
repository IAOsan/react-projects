import { createContext, useContext, useEffect, useState } from 'react';
import { API_BASE_URL, RESULTS_PER_PAGE } from '../config';

export const GithubContext = createContext();

export const useGithubContext = () => {
	// avoidi use context outside this context
	const context = useContext(GithubContext);

	if (context === undefined)
		throw new Error('useGithubContext must be called within GithubContext');

	return context;
};

export default function GithubContextProvider({ children }) {
	const [githubUser, setGithubUser] = useState({});
	const [repos, setRepos] = useState([]);
	const [followers, setFollowers] = useState([]);
	const [requests, setRequests] = useState({ limit: 0, remaining: 0 });
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

	// check requests
	useEffect(() => {
		(async function () {
			try {
				const request = await fetch(`${API_BASE_URL}/rate_limit`),
					{
						rate: { limit, remaining },
					} = (await request.json()) || {
						rate: { limit: 0, remaining: 0 },
					};

				if (!request.ok)
					throw new Error(`${request.status}: ${request.statusText}`);
				if (remaining === 0)
					throw new Error(
						`Sorry, you have exceeded your hourly rate limit`
					);

				setError((prevState) => null);
				setRequests((prevState) => ({
					limit,
					remaining,
				}));
			} catch (error) {
				setError((prevState) => error);
			}
		})();
	}, [githubUser]);

	async function searchGithubUser(userName) {
		setIsLoading((prevState) => true);
		try {
			// ONLY NETWORK ERRORS returns rejected
			const [user, followers, repos] = await Promise.allSettled([
				fetch(`${API_BASE_URL}/users/${userName}`),
				fetch(
					`${API_BASE_URL}/users/${userName}/followers?per_page=${RESULTS_PER_PAGE}`
				),
				fetch(
					`${API_BASE_URL}/users/${userName}/repos?per_page=${RESULTS_PER_PAGE}`
				),
			]);

			if (user.status === 'rejected') throw new Error(user.reason);
			if (user.value.status === 404)
				throw new Error('There is no user with that username');

			const userData = await user.value.json(),
				followersData = await followers.value.json(),
				reposData = await repos.value.json();

			setError((prevState) => null);
			setIsLoading((prevState) => false);
			setGithubUser((prevState) => userData);
			setFollowers((prevState) => {
				return followers.status === 'fulfilled'
					? followersData
					: prevState;
			});
			setRepos((prevState) => {
				return repos.status === 'fulfilled' ? reposData : prevState;
			});
		} catch (error) {
			setIsLoading((prevState) => false);
			setError((prevState) => error);
		}
	}

	return (
		<GithubContext.Provider
			value={{
				githubUser,
				repos,
				followers,
				requests,
				error,
				searchGithubUser,
				isLoading,
			}}
		>
			{children}
		</GithubContext.Provider>
	);
}
