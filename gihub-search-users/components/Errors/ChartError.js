import { ReactComponent as LogisticsIcon } from '../../assets/logistics.svg';

export default function ChartError({ msg }) {
	return (
		<div className='pos-abs pos-center text-center'>
			<LogisticsIcon className='icon icon--xxl icon--muted d-inline-block' />
			<p className='text-muted'>{msg}</p>
		</div>
	);
}
