import { useGithubContext } from '../../context/githubContext';
import StatisticsItem from '../StatisticsItem/StatisticsItem';
import { NoteBookIcon, UserIcon, AddUserIcon, CodingIcon } from '../../icons';

export default function Statistics() {
	const { githubUser } = useGithubContext();
	const { followers, following, public_gists, public_repos } = githubUser;
	const reviewIconClassName = 'icon icon--md d-block pos-abs pos-center';
	const reviews = [
		{
			id: 0,
			icon: <NoteBookIcon className={reviewIconClassName} />,
			label: 'Repos',
			value: public_repos,
			color: 'statistics__icon-box--repos',
		},
		{
			id: 1,
			icon: <UserIcon className={reviewIconClassName} />,
			label: 'Followers',
			value: followers,
			color: 'statistics__icon-box--followers',
		},
		{
			id: 2,
			icon: <AddUserIcon className={reviewIconClassName} />,
			label: 'Following',
			value: following,
			color: 'statistics__icon-box--following',
		},
		{
			id: 3,
			icon: <CodingIcon className={reviewIconClassName} />,
			label: 'Gists',
			value: public_gists,
			color: 'statistics__icon-box--gists',
		},
	];

	return (
		<section className='statistics'>
			<div className='container'>
				<div className='row'>
					{reviews.map(({ id, ...restProps }) => (
						<div key={id} className='col-lg-3 col-6'>
							<StatisticsItem {...restProps} />
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
