import { useProductsContext } from '../../context/ProductsContext';
import ProductPreview from '../ProductPreview/ProductPreview';

export default function ProductsGrid() {
	const { error, products } = useProductsContext();

	if (error && error.location === 'products') {
		return <h2 className='text-center'>Oops, an errr has ocurred</h2>;
	}

	return (
		<div className='row'>
			{products.length > 0 &&
				products.map(({ id, image, name, price }) => (
					<div key={id} className='col-lg-4'>
						<ProductPreview
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
