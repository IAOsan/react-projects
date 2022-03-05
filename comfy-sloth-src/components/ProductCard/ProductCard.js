import { Link } from 'react-router-dom';
import { MagnifyingGlassIcon } from '../../icons';
import { formatPrice } from '../../helpers';
import ImageNotFound from '../../assets/image-not-found.png';

export default function ProductCard({ id, image, name, price }) {
	return (
		<article className='product-card'>
			<div className='img-box img-box--16-9'>
				<div className='product-card__picture-overlay'>
					<Link
						className='product-card__link pos-abs pos-centered'
						to={`/products/${id}`}
					>
						<MagnifyingGlassIcon className='icon pos-abs pos-centered' />
					</Link>
				</div>
				<img className='pos-abs pos-centered' src={image} alt={name} />
			</div>
			<div className='product-card__desc d-flex d-flex-jc-sb'>
				<p className='text-capitalize'>{name}</p>
				<p className='text-warning'>{formatPrice(price)}</p>
			</div>
		</article>
	);
}

ProductCard.defaultProps = {
	id: 0,
	image: ImageNotFound,
	name: 'Product name',
	price: '0.00',
};
