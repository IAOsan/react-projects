export default function Rating({ rating, reviews }) {
	return (
		<div className='d-flex d-flex-ai-c mb-xxs'>
			<div
				className='stars mr-xs'
				style={{ '--rating': rating }}
				aria-label={`Rating of this product is ${rating} out of 5`}
			></div>
			<span>({`${reviews} customer reviews`})</span>
		</div>
	);
}

Rating.defaultProps = {
	stars: 0,
	reviews: 0,
};
