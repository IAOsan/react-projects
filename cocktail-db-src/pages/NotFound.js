import { ReactComponent as NotFoundIcon } from '../assets/browser.svg';
import { Link } from 'react-router-dom';

export default function NotFound() {
	return (
		<main>
			<div className='page'>
				<div className='container text-center anima-appear-bottom'>
					<NotFoundIcon className='icon icon--notFound' />
					<h1 className='heading heading-3'>
						<span></span>
						Oops!, it's a dead end.
					</h1>
					<Link to='/' className='btn btn--green'>
						BACK HOME
					</Link>
				</div>
			</div>
		</main>
	);
}
