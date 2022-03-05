import { Link } from 'react-router-dom';
import { formatPrice } from '../../helpers';

export default function ProductsListView({ products }) {
	function trimText(chars, text) {
		if (text.length > chars) {
			return `${text.substr(0, chars)}....`;
		}
		return text;
	}

	return (
		<div className='row'>
			{products.map(({ id, image, name, price, description }) => (
				<div key={id} className='col-12'>
					<div className='row'>
						<div className='col-4'>
							<div className='img-box img-box--4-3 pos-center-y'>
								<img
									className='pos-abs pos-centered'
									src={image}
									alt=''
								/>
							</div>
						</div>
						<div className='col-8'>
							<h3 className='heading-4 text-capitalize mb-xxs'>
								{name}
							</h3>
							<p className='text-warning mb-xxs'>
								{formatPrice(price)}
							</p>
							<p className='font-sm mb-xl'>
								{trimText(220, description)}
							</p>
							<Link
								to={`/products/${id}`}
								className='btn btn--warning'
							>
								DETAILS
							</Link>
						</div>
					</div>
				</div>
			))}
		</div>
	);
}
