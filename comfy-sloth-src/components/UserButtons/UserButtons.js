import { useHistory } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { useCartContext } from '../../context/CartContext';
import { CartIcon, UserLockIcon, UserUnlockIcon } from '../../icons';

export default function UserButtons() {
	const { totalItems } = useCartContext();
	const { push } = useHistory();
	const { loginWithRedirect, isAuthenticated, logout } = useAuth0();

	function handleGoToCart() {
		push('/cart');
	}

	function handleLogin() {
		if (isAuthenticated) {
			logout({ returnTo: window.location.origin });
		} else {
			loginWithRedirect();
		}
	}

	return (
		<>
			<button onClick={handleGoToCart} className='btn btn--xl btn--text'>
				<span className='mr-xxs'>Cart</span>
				<span className='pos-rel'>
					<span className='cart__count pos-abs'>{totalItems}</span>
					<CartIcon className='icon icon--md d-inline-block' />
				</span>
			</button>

			<button onClick={handleLogin} className='btn btn--xl btn--text'>
				<span className='mr-xxs'>
					{isAuthenticated ? 'Logout' : 'Login'}
				</span>
				<span>
					{isAuthenticated ? (
						<UserUnlockIcon className='icon icon--md d-inline-block' />
					) : (
						<UserLockIcon className='icon icon--md d-inline-block' />
					)}
				</span>
			</button>
		</>
	);
}
