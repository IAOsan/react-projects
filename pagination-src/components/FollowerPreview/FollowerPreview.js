export default function FollowerPreview({ image, url, name }) {
	return (
		<article className='follower-preview'>
			<div
				style={{ background: `url(${image})` }}
				className='follower-preview__image'
			></div>
			<h4 className='follower-preview__name'>{name}</h4>
			<a
				href={url}
				target='_blank'
				rel='noreferrer'
				className='btn btn--blue follower-preview__btn-profile'
			>
				View Profile
			</a>
		</article>
	);
}
