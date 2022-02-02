import { Link } from 'react-router-dom';
import { ReactComponent as Box } from '../assets/box.svg';

export default function ErrorPage() {
	return (
		<main className='page error-page d-flex d-flex-ai-c'>
			<div className='container'>
				<h1 className='error-page__code'>404</h1>
				<Box className='d-block m-auto error-page__icon' />
				<h2>Sorry, the page you tried cannot be found</h2>
				<Link to='/' className='btn btn--primary my-xl'>
					Back Home
				</Link>
			</div>
		</main>
	);
}
