import SearchBar from '../SearchBar/SearchBar';

export default function Header() {
	return (
		<header className='header'>
			<div className='container'>
				<h1 className='heading-3'>Search Hacking News</h1>
				<SearchBar />
			</div>
		</header>
	);
}
