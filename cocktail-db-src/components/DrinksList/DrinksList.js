import CocktailPreview from '../CocktailPreview/CocktailPreview';

export default function DrinksList({ data }) {
	return (
		<section className='drinks-grid'>
			<div className='container'>
				<div className='row'>
					{data.drinks.map((drink) => (
						<div
							key={drink.idDrink.toString()}
							className='col-lg-4 col-md-6'
						>
							<CocktailPreview {...drink} />
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
