import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';
import { PlusIcon, MinusIcon } from '../../icons';

export default function AddToCart({ product }) {
	const { addToCart } = useCartContext();
	const { id, colors, stock, name, price, images } = product;
	const [selectedColor, setSelectedColor] = useState(colors[0]);
	const [amount, setAmount] = useState(0);
	const history = useHistory();

	function handleAmount({ target }) {
		const btn = target.closest('button'),
			dataAmount = Number(btn.dataset.amount);

		if ((!dataAmount && dataAmount !== 0) || dataAmount < 1) return;
		// if amount > stock of product dont add more
		setAmount((prevState) => (dataAmount > stock ? stock : dataAmount));
	}

	function handleSelectColor({ target }) {
		const dataColor = target.dataset.color;

		if (!dataColor) return;

		setSelectedColor((prevState) => dataColor);
	}

	function onAddToCart() {
		addToCart({
			id: id + selectedColor,
			image: images[0].thumbnails.small.url,
			name,
			color: selectedColor,
			price,
			amount,
			max: stock,
		});
		// redirect to cart
		history.push('/cart');
	}

	return (
		<>
			<div className='mt-xl mb-xl'>
				<div className='row row--no-gutters'>
					<div className='col-md-3 col-4'>
						<p className='font-bold'>Colors:</p>
					</div>
					<div className='col-md-9 col-8 d-flex d-flex-ai-c'>
						{colors &&
							colors.map((item, idx) => {
								const btnClassname = `btn btn--filter-color btn--filter-color-xl mr-xs ${
									selectedColor === item && 'active'
								}`;

								return (
									<button
										onClick={handleSelectColor}
										data-color={item}
										key={idx}
										style={{
											'--bg-color': item,
										}}
										className={btnClassname}
									></button>
								);
							})}
					</div>
				</div>
				<div className='mt-xl'>
					<button
						onClick={handleAmount}
						data-amount={amount - 1}
						className='btn btn--text d-inline-block'
						type='button'
					>
						<MinusIcon className='icon icon--lg' />
					</button>
					<p className='font-xxxl font-bold d-inline-block'>
						{amount}
					</p>
					<button
						onClick={handleAmount}
						data-amount={amount + 1}
						className='btn btn--text d-inline-block'
						type='button'
					>
						<PlusIcon className='icon icon--lg' />
					</button>
				</div>
				<button onClick={onAddToCart} className='btn btn--warning'>
					ADD TO CART
				</button>
			</div>
		</>
	);
}

AddToCart.defaultProps = {
	product: { colors: [''], stock: 0 },
};
