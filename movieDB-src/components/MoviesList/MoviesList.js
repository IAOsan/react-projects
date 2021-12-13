import MoviePreview from '../MoviePreview/MoviePreview';

export default function MoviesList({ data }) {
	return (
		<section className='movies'>
			<div className='container'>
				<div className='row'>
					{data.map((movie) => (
						<div key={movie.imdbID} className='col-lg-3 col-md-4'>
							<MoviePreview {...movie} />
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
