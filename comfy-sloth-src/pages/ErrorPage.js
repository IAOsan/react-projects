import { UfoIcon } from '../icons';

export default function ErrorPage() {
	return (
		<main className='page'>
			<div className='section text-center text-muted'>
				<UfoIcon className='icon icon--display-1' />
				<h1 className='heading-1 mt-xl'>Page not found 404</h1>
			</div>
		</main>
	);
}
