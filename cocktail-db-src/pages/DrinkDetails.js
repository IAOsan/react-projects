import { useContext, useEffect, useState } from 'react';
import { recipesContext } from '../context/recipesContext';

export default function DrinkDetails({ history, location, match }) {
	const { data } = useContext(recipesContext);
	const [drink, setDrink] = useState({});

	useEffect(() => {
		const { id } = match.params;
		if (!Object.keys(data)) return;

		setDrink((prevState) =>
			data.drinks?.find((item) => item.idDrink === id)
		);
	}, [match.params, data]);

	function handleClick() {
		history.goBack();
	}

	function getValues(obj, word) {
		return Object.entries(obj).filter(([key, value]) => key.includes(word));
	}

	const ingredients = getValues(drink, 'strIngredient'),
		measures = getValues(drink, 'strMeasure');

	return (
		<main>
			<div className='page'>
				<div className='container anima-appear-right'>
					<button onClick={handleClick} className='btn btn--green'>
						BACK HOME
					</button>
					<div className='row'>
						<div className='col-lg-6 col-md-5'>
							<img src={drink?.strDrinkThumb} alt='' />
						</div>
						<div className='col-lg-6 col-md-7'>
							<h1 className='heading-2 text-x-bold'>
								{drink.strDrink}
							</h1>

							<div className='drink-details__paragraph'>
								<span className='drink-details__label'>
									category
								</span>
								<span>{drink.strCategory}</span>
							</div>

							<div className='drink-details__paragraph'>
								<span className='drink-details__label'>
									info
								</span>
								<span>{drink.strAlcoholic}</span>
							</div>
							<div className='drink-details__paragraph'>
								<span className='drink-details__label'>
									glass
								</span>
								<span>{drink.strGlass}</span>
							</div>
							<div className='drink-details__paragraph'>
								<span className='drink-details__label'>
									insructions
								</span>
								<span>{drink.strInstructions || 'n/a'}</span>
							</div>
							<div className='drink-details__paragraph'>
								<span className='drink-details__label'>
									ingredients
								</span>
								<ul className='drink-details__list'>
									{ingredients.length > 0 &&
										ingredients.map((ing, idx) => {
											const [keyI, valueI] = ing,
												[keyM, valueM] = measures[idx];

											return ing[1] ? (
												<li key={idx.toString()}>
													{valueI} - {valueM || 'n/a'}
												</li>
											) : null;
										})}
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}
