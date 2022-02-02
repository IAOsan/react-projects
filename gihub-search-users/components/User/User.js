import { useGithubContext } from '../../context/githubContext';
import { HotelIcon, LinkIcon, MapIcon } from '../../icons';
import defaultUserPicture from '../../assets/user.png';

export default function User() {
	const { githubUser } = useGithubContext();
	const defaultProperties = {
		name: 'Name not provided',
		company: 'Company not provided',
		blog: 'Blog not provided',
		bio: 'Bio not provided',
		location: 'Location not provided',
		twitter_username: 'Twitter not provided',
	};
	const avatar_url = githubUser.avatar_url || defaultUserPicture,
		html_url = githubUser.html_url,
		company = githubUser.company || defaultProperties.company,
		name = githubUser.name || defaultProperties.name,
		blog = githubUser.blog || defaultProperties.blog,
		bio = githubUser.bio || defaultProperties.bio,
		location = githubUser.location || defaultProperties.location,
		twitter_username =
			githubUser.twitter_username || defaultProperties.twitter_username,
		login = githubUser.login;

	function getInfoProvided(property, fallback, value) {
		if (property.includes('not provided')) {
			return fallback;
		}

		return value ? value : property;
	}

	return (
		<article
			data-label='User'
			className='user-info__panel user-info__panel--labeled bg-light box-shadow pos-rel'
		>
			<div className='d-flex d-flex-ai-c d-flex-jc-sb'>
				<div className='user-info__picture-box'>
					{avatar_url && (
						<img
							className='img-fluid'
							src={avatar_url}
							alt={getInfoProvided(name, login)}
						/>
					)}
				</div>
				<h3 className='user-info__heading'>
					<span className='d-block'>{name}</span>
					<span className='d-block font-w-normal font-s-sm text-muted'>
						@{twitter_username}
					</span>
				</h3>
				<a
					href={html_url}
					className='btn btn--secondary'
					target='_blank'
					rel='noreferrer'
				>
					Follow
				</a>
			</div>
			<p className='user-info__desc'>{bio}</p>
			<p className='text-muted'>
				<HotelIcon className='icon d-inline-block mr-xs' />
				{company}
			</p>
			<p className='text-muted'>
				<MapIcon className='icon d-inline-block mr-xs' />
				{location}
			</p>
			<a
				href={getInfoProvided(blog, '/', `https://${blog}`)}
				target='_blank'
				rel='noopener noreferrer'
			>
				<LinkIcon className='icon d-inline-block mr-xs text-muted' />
				{blog}
			</a>
		</article>
	);
}
