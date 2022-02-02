import defaultUserPicture from '../../assets/user.png';

export default function Follower({ imgUrl, login, url }) {
	return (
		<div className='follower d-flex'>
			<div className='follower__picture-box'>
				{imgUrl && (
					<img
						src={imgUrl || defaultUserPicture}
						alt={login}
						className='img-fluid'
					/>
				)}
			</div>
			<h4 className='follower__info'>
				<span className='d-block'>{login}</span>
				<a
					href={url}
					target='_blank'
					rel='noreferrer'
					className='text-muted font-w-normal font-s-sm'
				>
					{url}
				</a>
			</h4>
		</div>
	);
}
