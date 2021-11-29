import Navbar from '../Navbar/Navbar';
import SearchBar from '../SearchBar/SearchBar';

export default function Header({ match }) {
	return (
		<header className='header'>
			<Navbar />
			<SearchBar isVisible={match.isExact} />
		</header>
	);
}
