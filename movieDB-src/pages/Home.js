import { useContext, useEffect, useState } from 'react';
import MoviesList from '../components/MoviesList/MoviesList';
import SearchBar from '../components/SearchBar/SearchBar';
import Spinner from '../components/Spinner/Spinner';
import { moviesContext } from '../context/moviesContext';

export default function Home() {
	const { data, isLoading } = useContext(moviesContext);
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		setMovies((prevState) => (data.length ? data : prevState));
	}, [data]);

	function canShowMoviesList(component) {
		return Array.isArray(movies) && movies.length > 0 ? component : null;
	}

	return (
		<main>
			<SearchBar />
			{isLoading && <Spinner />}
			{canShowMoviesList(<MoviesList data={movies} />)}
		</main>
	);
}
