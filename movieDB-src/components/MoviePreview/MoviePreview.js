import { Link } from 'react-router-dom';
import notAvailable from '../../assets/movie_not_available.png';

export default function MoviePreview({ Title, Year, Poster, imdbID }) {
	const moviePoster = Poster === 'N/A' ? notAvailable : Poster;

	return (
		<Link to={`/movie/${imdbID}`} className='movie__link'>
			<article className='movie'>
				<img className='movie__poster' src={moviePoster} alt={Title} />
				<div className='movie__label'>
					<h4 id='movie-title' className='movie__title'>
						{Title}
					</h4>
					<p className='movie__desc'>{Year}</p>
				</div>
			</article>
		</Link>
	);
}
