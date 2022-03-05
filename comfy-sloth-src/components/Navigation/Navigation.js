import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import UserButtons from '../UserButtons/UserButtons';
import { useAppContext } from '../../context/AppContext';
import { CloseIcon } from '../../icons';
import { navLinks } from '../../data';
import Logo from '../../assets/logo.svg';

export default function Navigation() {
	const { navigationIsOpen: isOpen, toggleNavigation } = useAppContext();
	const { isAuthenticated } = useAuth0();

	return (
		<>
			<aside className={`navigation ${isOpen && 'open'} d-desktop-none`}>
				<header className=' d-flex d-flex-ai-c d-flex-jc-sb'>
					<div className='navbar__logo-box'>
						<img
							className='navbar__logo'
							src={Logo}
							alt='Comfy Sloth Logo'
						/>
					</div>
					<button
						onClick={toggleNavigation}
						className='btn btn--text'
					>
						<CloseIcon className='icon icon--xxl text-danger' />
					</button>
				</header>
				<ul onClick={toggleNavigation} className='navigation__nav'>
					{navLinks.map(({ id, name, url }) => {
						if (!isAuthenticated && name === 'checkout')
							return null;

						return (
							<li key={id} className='navigation__item'>
								<Link to={url} className='navigation__link'>
									{name}
								</Link>
							</li>
						);
					})}
				</ul>
				<div onClick={toggleNavigation} className='d-flex d-flex-jc-c'>
					<UserButtons />
				</div>
			</aside>
			<div
				className={`overlay navigation__overlay d-desktop-none ${
					isOpen && 'active'
				}`}
			></div>
		</>
	);
}
