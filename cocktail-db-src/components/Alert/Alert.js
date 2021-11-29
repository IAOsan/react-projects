import { ReactComponent as ErrorIcon } from '../../assets/error.svg';

export default function Alert({ children }) {
	return (
		<div className='alert d-flex anima-appear-top'>
			<div className='alert__icon alert__icon--danger'>
				<ErrorIcon className='icon icon--alert' />
			</div>
			<div className='alert__body'>
				<h3 className='heading-3'>Error</h3>
				{children}
			</div>
		</div>
	);
}
