import { useAuth0 } from '@auth0/auth0-react';
import { ReactComponent as Login } from '../assets/login.svg';

export default function LoginPage(props) {
	const { loginWithPopup } = useAuth0();

	function handleLogin() {
		loginWithPopup();
		props.history.push('/');
	}

	return (
		<main className='page login-page d-flex d-flex-ai-c'>
			<div className='container box-shadow'>
				<div className='row'>
					<div className='col-lg-7 bg-secondary-lighter bg-danger-50'>
						<Login className='d-block login-page__picture' />
					</div>
					<div className='col-lg-5 text-center d-flex d-flex-column d-flex-jc-c d-flex-ai-c bg-light'>
						<h1>Github User</h1>
						<button
							onClick={handleLogin}
							className='btn btn--primary btn--md btn--block my-xl'
						>
							Login / Sign Up
						</button>
					</div>
				</div>
			</div>
		</main>
	);
}
