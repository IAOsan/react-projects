import { useEffect, useRef, useState } from 'react';
import useFetch from './hooks/useFetch';
import useScroll from './hooks/useScroll';
import SearchBar from './components/SearchBar/SearchBar';
import Alert from './components/Alert/Alert';
import Spinner from './components/Spinner/Spinner';
import Gallery from './components/Gallery/Gallery';
import { BASE_API_URL, CLIENT_ID, RESULS_PER_PAGE } from './config';
import './app.styles.scss';

export default function App() {
	const [page, setPage] = useState(1);
	const [query, setQuery] = useState('');
	const [photos, setPhotos] = useState([]);
	const [data, isLoading, error] = useFetch(
		`${BASE_API_URL}${
			query
				? `/search/photos?query=${query}&page=${page}&per_page=${RESULS_PER_PAGE}&${CLIENT_ID}`
				: `/photos?page=${page}&per_page=${RESULS_PER_PAGE}&${CLIENT_ID}`
		}`,
		[]
	);
	const targetRef = useRef();
	useScroll(onScroll);

	useEffect(() => {
		setPhotos((prevState) => {
			if (page === 1 && query) {
				return data.results;
			}
			if (Array.isArray(data)) {
				return prevState.concat(data);
			}
			if (Object.keys(data) && !Array.isArray(data)) {
				return prevState.concat(data.results);
			}
		});
	}, [data]);

	function onScroll(e) {
		const scroll = window.scrollY + window.innerHeight,
			offset = targetRef.current.offsetHeight;

		if (scroll > offset) {
			setPage((prevState) => prevState + 1);
		}
	}

	function handleSearch(query) {
		if (!query) return;
		setQuery((prevState) => query);
		setPage((prevState) => 1);
	}

	if (error) return <Alert type='error' msg={error.message} />;

	return (
		<main>
			<SearchBar handleSearch={handleSearch} />

			{isLoading && <Spinner />}

			{query && photos.length === 0 && (
				<p className='heading-3 text-center'>No results</p>
			)}

			{Array.isArray(photos) && photos.length > 0 && (
				<Gallery data={photos} ref={targetRef} />
			)}
		</main>
	);
}
