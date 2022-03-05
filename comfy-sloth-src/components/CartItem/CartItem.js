import { formatPrice } from '../../helpers';
import { PlusIcon, MinusIcon, TrashIcon } from '../../icons';

export default function CartItem({ item, toggleAmount, removeItem }) {
	const { id, image, name, color, price, amount, max } = item;

	function onToggleAmount({ target }) {
		const dataAmount = Number(target.closest('button').dataset.amount);

		if (!dataAmount || dataAmount > max) return;

		toggleAmount({ id, amount: dataAmount });
	}

	function onRemove({ target }) {
		const dataID = target.closest('button').dataset.id;
		if (!dataID) return;
		removeItem(dataID);
	}

	return (
		<>
			<div className='col-md-3 col-7'>
				<article>
					<div className='row row--gutter-sm'>
						<div className='col-5'>
							<div className='img-box img-box--4-3 pos-rel pos-center-y'>
								<img
									className='pos-abs pos-centered'
									src={image}
									alt={name}
								/>
							</div>
						</div>
						<div className='col-7'>
							<div className='pos-rel pos-center-y'>
								<h4 className='text-capitalize'>{name}</h4>
								<p className='text-muted d-inline-block'>
									Color:
								</p>
								<span
									style={{ '--color': color }}
									className='cartItem__color'
								></span>
							</div>
						</div>
					</div>
				</article>
			</div>
			<div className='col-md-3 text-center d-mobile-sm-none'>
				<p className='text-warning pos-rel pos-center-y'>
					{formatPrice(price)}
				</p>
			</div>
			<div className='col-md-3 col-3'>
				<form className='text-center pos-rel pos-center-y'>
					<div className='form__group d-inline-block'>
						<button
							onClick={onToggleAmount}
							data-amount={amount - 1}
							type='button'
							className='btn btn--text d-inline-block'
						>
							<MinusIcon className='icon icon--md' />
						</button>
						<span className='font-bold font-xl'>{amount}</span>
						<button
							onClick={onToggleAmount}
							data-amount={amount + 1}
							type='button'
							className='btn btn--text d-inline-block'
						>
							<PlusIcon className='icon icon--md' />
						</button>
					</div>
				</form>
			</div>
			<div className='col-md-3 col-2'>
				<div className='pos-rel pos-center-y'>
					<p className='text-muted d-inline-block mr-xs d-mobile-sm-none'>
						{formatPrice(price * amount)}
					</p>
					<button
						onClick={onRemove}
						data-id={id}
						className='btn btn--danger pos-abs pos-right'
						type='button'
					>
						<TrashIcon className='icon icon' />
					</button>
				</div>
			</div>
		</>
	);
}
