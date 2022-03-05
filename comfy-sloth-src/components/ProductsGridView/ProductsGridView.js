import ProductCard from '../ProductCard/ProductCard';

export default function ProductsGridView({ products }) {
	if (!products) return null;

	return (
		<div className='row'>
			{products.length > 0 &&
				products.map(({ id, image, name, price }) => (
					<div key={id} className='col-lg-4 col-md-6'>
						<ProductCard
							id={id}
							image={image}
							name={name}
							price={price}
						/>
					</div>
				))}
		</div>
	);
}
