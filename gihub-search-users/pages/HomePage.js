import Header from '../components/Header/Header';
import SearchBar from '../components/SearchBar/SearchBar';
import Statistics from '../components/Statistics/Statistics';
import UserInfo from '../components/UserInfo/UserInfo';
import Spinner from '../components/Spinner/Spinner';
import { useGithubContext } from '../context/githubContext';

export default function HomePage() {
	const { isLoading } = useGithubContext();

	return (
		<>
			<Header />
			<main>
				<SearchBar />
				{isLoading ? (
					<Spinner />
				) : (
					<>
						<Statistics />
						<UserInfo />
					</>
				)}
			</main>
		</>
	);
}
