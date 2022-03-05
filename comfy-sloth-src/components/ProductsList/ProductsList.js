import ProductsListView from '../../component/ProductsListView/ProductsListView';
import { useFilterContext } from '../../context/FilterContext';
import ProductsGridView from '../ProductsGridView/ProductsGridView';
import { OpenBoxIcon } from '../../icons';

export default function ProductsList() {
	const { products, filteredProducts, gridView } = useFilterContext();

	if (products.length && !filteredProducts.length) {
		return (
			<div className='section text-center text-muted'>
				<OpenBoxIcon className='icon icon--display-2 d-inline-block' />
				<p className='text-capitalize font-lg'>no products found</p>
			</div>
		);
	}

	if (gridView) {
		return <ProductsGridView products={filteredProducts} />;
	}

	return <ProductsListView products={filteredProducts} />;
}
