import BreadCrumb from '../components/BreadCrumb/BreadCrumb';
import Filters from '../components/Filters/Filters';
import Sort from '../components/Sort/Sort';
import ProductsList from '../components/ProductsList/ProductsList';

export default function ProductsPage() {
	return (
		<main>
			<BreadCrumb current='products' />
			<section className='section'>
				<div className='container'>
					<div className='row'>
						<div className='col-lg-2 col-md-3'>
							<Filters />
						</div>
						<div className='col-lg-10 col-md-9 pos-rel'>
							<Sort />
							<ProductsList />
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}
