import { Link, useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import Spinner from '../components/Spinner/Spinner';
import { BASE_API_URL, API_KEY } from '../config';

export default function MovieDetails() {
	const { id } = useParams();
	const [data, isLoading, error] = useFetch(
		`${BASE_API_URL}?i=${id}&plot=full&${API_KEY}`,
		{}
	);

	if (isLoading) return <Spinner />;

	const { Title, Year, Plot, Poster } = data;
	return (
		<main className='movie-details'>
			<div className='container'>
				<div className='row'>
					<div className='col-lg-4'>
						<div className='movie'>
							<img
								src={Poster}
								alt={Title}
								className='movie__poster'
							/>
						</div>
					</div>
					<div className='col-lg-8'>
						<h1 className='heading-3'>{Title}</h1>
						<p>{Plot}</p>
						<b className='movie-details__year'>{Year}</b>
						<Link className='btn btn--blue' to='/'>
							Back To Movies
						</Link>
					</div>
				</div>
			</div>
		</main>
	);
}
