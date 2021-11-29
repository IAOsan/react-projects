import { useRef } from 'react';
import { Link } from 'react-router-dom';

export default function CocktailCard({
	strDrinkThumb,
	idDrink,
	strDrink,
	strCategory,
	strAlcoholic,
}) {
	const headingRef = useRef();

	function handleHover(e) {
		const eType = e.type,
			height = headingRef.current.offsetHeight,
			totalheight = headingRef.current.scrollHeight;

		const eventTypes = {
			mouseover: () => {
				if (height === totalheight) return;
				headingRef.current.style.height = `${totalheight / 10}rem`;
			},
			mouseleave: () => {
				if (!headingRef.current.style.cssText) return;
				headingRef.current.style.height = ``;
			},
		};

		const event = eventTypes[eType];
		event();
	}

	return (
		<article
			onMouseOver={handleHover}
			onMouseLeave={handleHover}
			className='cocktail-preview anima-appear-bottom'
		>
			<div
				style={{
					background: `url(${strDrinkThumb}/preview) center no-repeat`,
				}}
				className='cocktail-preview__img'
			></div>
			<div className='cocktail-preview__body'>
				<h4 className='cocktail-preview__title' ref={headingRef}>
					{strDrink}
				</h4>
				<p className='cocktail-preview__description'>{strCategory}</p>
				<p className='cocktail-preview__type'>{strAlcoholic}</p>
				<Link className='btn btn--green' to={`/drink/${idDrink}`}>
					Details
				</Link>
			</div>
		</article>
	);
}
