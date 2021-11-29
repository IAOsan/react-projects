import { NavLink, Link } from 'react-router-dom';

export default function Navbar() {
	return (
		<nav className='navbar'>
			<div className='container d-flex d-flex-ai-c d-flex-jc-sb'>
				<div className='navbar__logo'>
					<Link className='navbar__logo-link' to='/'>
						<span>The</span>
						<span className='text-bold'>Cocktail</span>
						<span>DB</span>
					</Link>
				</div>
				<ul className='navbar__nav'>
					<li className='navbar__item'>
						<NavLink
							isActive={(match, location) =>
								match.isExact ? true : false
							}
							activeClassName='navbar__link--active'
							className='navbar__link'
							to='/'
						>
							Home
						</NavLink>
					</li>
					<li className='navbar__item'>
						<NavLink
							activeClassName='navbar__link--active'
							className='navbar__link'
							to='/about'
						>
							About
						</NavLink>
					</li>
				</ul>
			</div>
		</nav>
	);
}
