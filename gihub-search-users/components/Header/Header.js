import { useAuth0 } from '@auth0/auth0-react';

export default function Header() {
	const { isAuthenticated, logout, user } = useAuth0();

	function canDisplayInfo(condition) {
		return isAuthenticated && user && condition ? true : false;
	}

	function handleLogout() {
		logout({ returnTo: window.location.origin });
	}

	return (
		<header className='header bg-light box-shadow'>
			<nav className='account d-flex d-flex-ai-c'>
				<div className='container d-flex d-flex-jc-c d-flex-ai-c'>
					<div className='account__picture-box text-center mx-xxs'>
						{canDisplayInfo(user.picture) && (
							<img
								className='img-fluid'
								src={user.picture}
								alt={user.name}
							/>
						)}
					</div>
					{canDisplayInfo(user.name) && (
						<h2 className='heading-4 mx-xxs'>
							<span className='font-w-normal'>Welcome, </span>
							<b>{user.name}</b>
						</h2>
					)}
					<button
						onClick={handleLogout}
						className='btn btn--text mx-xxs'
					>
						Logout
					</button>
				</div>
			</nav>
		</header>
	);
}
