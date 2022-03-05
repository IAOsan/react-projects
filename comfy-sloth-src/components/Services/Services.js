import Service from '../Service/Service';
import { GoalIcon, ScrollIcon, DiamonIcon } from '../../icons';

export default function About() {
	const iconClassName = 'icon icon--xxl d-block pos-abs pos-centered';
	const services = [
		{
			id: 0,
			title: 'Mision',
			text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis cumque dolores harum non earum? Enim numquam vel natus?',
			icon: <GoalIcon className={iconClassName} />,
		},
		{
			id: 1,
			title: 'Vision',
			text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis cumque dolores harum non earum? Enim numquam vel natus?',
			icon: <DiamonIcon className={iconClassName} />,
		},
		{
			id: 2,
			title: 'History',
			text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis cumque dolores harum non earum? Enim numquam vel natus?',
			icon: <ScrollIcon className={iconClassName} />,
		},
	];

	return (
		<section className='services section'>
			<div className='container'>
				<div className='row'>
					<div className='col-lg-6 col-md-7'>
						<h2 className='heading-2'>
							Custom Furniture Built Only For You
						</h2>
					</div>
					<div className='col-lg-6'>
						<p className='text-primary'>
							Lorem ipsum, dolor sit amet consectetur adipisicing
							elit. Harum dolores ipsum aperiam excepturi non
							sapiente cupiditate at id.
						</p>
					</div>
				</div>
				<div className='services__grid'>
					<div className='row row--gutter-md'>
						{services.map(({ id, ...restProps }) => (
							<div key={id} className='col-lg-4'>
								<Service {...restProps} />
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
