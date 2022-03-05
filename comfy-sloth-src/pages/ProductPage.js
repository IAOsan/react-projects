import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useProductsContext } from '../context/ProductsContext';
import BreadCrumb from '../components/BreadCrumb/BreadCrumb';
import Rating from '../components/Rating/Rating';
import ProductPreview from '../components/ProductPreview/ProductPreview';
import AddToCart from '../components/AddToCart/AddToCart';
import Spinner from '../components/Spinner/Spinner';
import { formatPrice } from '../helpers';
import { ErrorIcon } from '../icons';

export default function ProductPage({ history, match }) {
	const {
		fetchSingleProduct,
		singleProduct,
		isLoading,
		error,
		handleRedirectOnError,
	} = useProductsContext();
	const { id } = match.params;
	const errorExist = error && error.location === 'single-product';

	useEffect(() => {
		fetchSingleProduct(id);
	}, [id]);

	if (isLoading) {
		return <Spinner />;
	}

	if (errorExist) {
		handleRedirectOnError(history.push, '/products');
		return (
			<main className='page'>
				<div className='section text-center text-muted'>
					<ErrorIcon className='icon icon--display-2 d-inline-block' />
					<h1 className='mt-xl'>
						{error.type === 404
							? 'Product not found'
							: 'Oops, something goes wrong'}
					</h1>
				</div>
			</main>
		);
	}

	const { name, price, description, reviews, stars, stock, images, company } =
		singleProduct;
	const isAvailable = stock > 0;

	return (
		<main>
			<BreadCrumb backTo={['home', 'products']} current={name} />
			<section className='section'>
				<div className='container'>
					<Link to='/products' className='btn btn--warning mb-xl'>
						BACK TO PRODUCTS
					</Link>
					<div className='row row--gutter-lg'>
						<div className='col-lg-6'>
							<ProductPreview images={images} />
						</div>
						<div className='col-lg-6'>
							<h2 className='heading-2 mb-sm text-capitalize'>
								{name}
							</h2>

							<Rating rating={stars} reviews={reviews} />

							<p className='font-lg text-warning-700 mb-sm'>
								<b>{formatPrice(price)}</b>
							</p>

							<p className='lineheight-md mb-xl'>{description}</p>

							<div className='mb-sm'>
								<div className='row row--no-gutters'>
									<div className='col-md-3 col-4'>
										<p className='font-bold'>Available:</p>
									</div>
									<div className='col-md-9 col-8'>
										<p>
											{isAvailable
												? 'In Stock'
												: 'Out of Stock'}
										</p>
									</div>
								</div>
							</div>

							<div className='mb-sm'>
								<div className='row row--no-gutters'>
									<div className='col-md-3 col-4'>
										<p className='font-bold'>SKU:</p>
									</div>
									<div className='col-md-9 col-8'>
										<p>{id}</p>
									</div>
								</div>
							</div>

							<div className='mb-sm'>
								<div className='row row--no-gutters'>
									<div className='col-md-3 col-4'>
										<p className='font-bold'>Brand:</p>
									</div>
									<div className='col-md-9 col-8'>
										<p>{company}</p>
									</div>
								</div>
							</div>

							<hr />
							{isAvailable && (
								<AddToCart product={singleProduct} />
							)}
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}
