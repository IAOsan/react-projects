import { Link } from 'react-router-dom';
import ProductCard from '../ProductCard/ProductCard';
import { useProductsContext } from '../../context/ProductsContext';
import Spinner from '../Spinner/Spinner';

export default function Products() {
	const { isLoading, error, featuredProducts } = useProductsContext();

	if (isLoading) {
		return (
			<div className='section'>
				<Spinner />
			</div>
		);
	}

	return (
		<section className='featured-products section'>
			<div className='container text-center'>
				<h2 className='heading-2 heading--underline-center mb-xl'>
					Featured Products
				</h2>

				{error && error.location === 'products' ? (
					<h2>{error.message || 'Oops, an error has ocurred'}</h2>
				) : (
					<>
						<div className='row'>
							{featuredProducts.length > 0 &&
								featuredProducts.map(
									({ id, image, name, price }) => (
										<div
											key={id}
											className='col-xl-4 col-md-6'
										>
											<ProductCard
												id={id}
												image={image}
												name={name}
												price={price}
											/>
										</div>
									)
								)}
						</div>
						<Link to='/products' className='btn btn--warning mt-xl'>
							ALL PRODUCTS
						</Link>
					</>
				)}
			</div>
		</section>
	);
}
