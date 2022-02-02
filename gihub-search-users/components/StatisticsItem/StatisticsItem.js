import { ReactComponent as Coding } from '../../assets/coding_1.svg';

export default function StatisticsItem({ icon, label, value, color }) {
	return (
		<article className='statistics__review bg-light box-shadow'>
			<div className={`statistics__icon-box ${color}`}>{icon}</div>
			<h4 className='heading-3 d-inline-block'>
				<span className='d-block font-w-xbold'>{value}</span>
				<span className='font-s-sm font-w-normal d-block text-muted'>
					{label}
				</span>
			</h4>
		</article>
	);
}

StatisticsItem.defaultProps = {
	icon: <Coding />,
	label: 'Default',
	value: 0,
	color: '',
};
