import { ReactComponent as ErrorIcon } from '../../assets/error.svg';

export default function Alert({ type, msg }) {
	return (
		<div className={`alert alert--${type}`}>
			{type === 'error' && <ErrorIcon className='alert__icon' />}
			<div className='alert__body'>
				<h4 className='heading-4'>{type.toUpperCase()}</h4>
				<p>{msg}</p>
			</div>
		</div>
	);
}
