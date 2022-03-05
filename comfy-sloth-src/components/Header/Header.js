import { useAuth0 } from '@auth0/auth0-react';
import { useAppContext } from '../../context/AppContext';
import { Link } from 'react-router-dom';
import UserButtons from '../UserButtons/UserButtons';
import { navLinks } from '../../data';
import { MenuIcon } from '../../icons';
import Logo from '../../assets/logo.svg';

export default function Header() {
	const { toggleNavigation } = useAppContext();
	const { isAuthenticated } = useAuth0();

	return (
		<header className='header'>
			<nav className='navbar height-100'>
				<div className='container height-100 d-flex d-flex-ai-c d-flex-jc-sb'>
					<div className='navbar__logo-box'>
						<Link to='/'>
							<img
								className='navbar__logo'
								src={Logo}
								alt='Comfy Sloth Logo'
							/>
						</Link>
					</div>
					<ul className='navbar__nav d-mobile-none'>
						{navLinks.map(({ id, name, url }) => {
							if (!isAuthenticated && name === 'checkout')
								return null;

							return (
								<li key={id} className='navbar__item'>
									<Link to={url} className='navbar__link'>
										{name}
									</Link>
								</li>
							);
						})}
					</ul>
					<div className='d-mobile-none'>
						<UserButtons />
					</div>
					<button
						onClick={toggleNavigation}
						className='navbar__toggler d-desktop-none'
					>
						<MenuIcon className='navbar__toggler-icon' />
					</button>
				</div>
			</nav>
		</header>
	);
}
