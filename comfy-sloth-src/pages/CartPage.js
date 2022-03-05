import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { useCartContext } from '../context/CartContext';
import BreadCrumb from '../components/BreadCrumb/BreadCrumb';
import { formatPrice } from '../helpers';
import CartItem from '../components/CartItem/CartItem';
import { EmptyCartIcon } from '../icons';

export default function CartPage({ history }) {
	const {
		cart,
		clearCart,
		totalAmount,
		shippingFree,
		toggleAmount,
		removeItem,
	} = useCartContext();
	const { isAuthenticated, loginWithRedirect } = useAuth0();

	function handleCheckout() {
		if (isAuthenticated) {
			history.push('./checkout');
		} else {
			loginWithRedirect();
		}
	}

	if (!cart.length) {
		return (
			<main className='page pos-rel'>
				<div className='section text-center text-muted'>
					<EmptyCartIcon className='icon icon--display-2 d-inline-block' />
					<h2 className='heading-3'>Your cart is empty</h2>
					<Link to='/products' className='btn btn--warning mt-xl'>
						FILL IT
					</Link>
				</div>
			</main>
		);
	}

	return (
		<main className='page'>
			<BreadCrumb current='cart' />
			<section className='section'>
				<div className='container'>
					<div className='row text-center text-capitalize text-muted font-bold d-mobile-sm-none'>
						<div className='col-md-3'>item</div>
						<div className='col-md-3'>price</div>
						<div className='col-md-3'>quantity</div>
						<div className='col-md-3'>subtotal</div>
					</div>
					<hr className='d-mobile-sm-none' />
					<div className='row row--no-gutters'>
						{cart.length > 0 &&
							cart.map((item) => (
								<CartItem
									key={item.id}
									item={item}
									toggleAmount={toggleAmount}
									removeItem={removeItem}
								/>
							))}
					</div>
					<hr />
					<div className='row'>
						<div className='col-md-6'>
							<Link
								to='/products'
								className='btn btn--warning mt-xl'
							>
								Continue Shopping
							</Link>
						</div>
						<div className='col-md-6 pos-rel'>
							<button
								onClick={clearCart}
								className='btn btn--dark mt-xl pos-abs pos-right'
								type='button'
							>
								Clear Shopping Cart
							</button>
						</div>
						<div className='col-lg-7 col-md-6'></div>
						<div className='col-lg-5 col-md-6'>
							<div className='row'>
								<div className='col-auto'>
									<p className='font-bold'>Subtotal:</p>
									<p className='text-muted'>Shipping Free:</p>
									<p className='font-lg font-bold mt-xl'>
										Order Total:
									</p>
								</div>
								<div className='col-auto'>
									<p>{formatPrice(totalAmount)}</p>
									<p className='text-muted'>
										{formatPrice(shippingFree)}
									</p>
									<p className='font-lg font-bold mt-xl'>
										{formatPrice(
											totalAmount + shippingFree
										)}
									</p>
								</div>
							</div>
							<button
								onClick={handleCheckout}
								className='btn btn--warning btn--block mt-lg'
								type='button'
							>
								{isAuthenticated
									? 'PROCEED TO CHECKOUT'
									: 'LOGIN'}
							</button>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}
