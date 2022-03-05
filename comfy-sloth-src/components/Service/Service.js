import { GoalIcon } from '../../icons';

export default function Service({ title, text, icon }) {
	return (
		<article className='service text-center'>
			<div className='service__icon-box pos-rel'>{icon}</div>
			<h3 className='heading-4 my-sm'>{title}</h3>
			<p className='text-primary'>{text}</p>
		</article>
	);
}

Service.defaultProps = {
	title: 'Service Title',
	text: 'Service text',
	icon: <GoalIcon className='icon' />,
};
