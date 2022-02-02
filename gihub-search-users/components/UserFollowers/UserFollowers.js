import { useEffect, useRef } from 'react';
import { useGithubContext } from '../../context/githubContext';
import Follower from '../Follower/Follower';
import { MailBoxIcon } from '../../icons';

export default function UserFollowers() {
	const { followers } = useGithubContext();
	const containerRef = useRef();
	const wrapRef = useRef();

	useEffect(() => {
		const containerHeight = containerRef.current.offsetHeight;
		wrapRef.current.style.height = `${containerHeight * 0.8}px`;
	}, [followers]);

	return (
		<article
			ref={containerRef}
			data-label='Followers'
			className='user-info__panel user-info__panel--labeled bg-light box-shadow pos-rel'
		>
			<div ref={wrapRef} className='followers'>
				{followers.length > 0 ? (
					followers.map(({ id, avatar_url, login, html_url }) => (
						<Follower
							key={id}
							imgUrl={avatar_url}
							login={login}
							url={html_url}
						/>
					))
				) : (
					<div className='pos-abs pos-center text-center'>
						<MailBoxIcon className='icon icon--xxl icon--muted d-inline-block' />
						<p className='text-muted'>No followers</p>
					</div>
				)}
			</div>
		</article>
	);
}
