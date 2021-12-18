import { useContext } from 'react';
import { newsContext } from '../../context/newsContext';

export default function NewsPreview({
	objectID,
	title,
	url,
	author,
	points,
	num_comments,
}) {
	const { onRemove } = useContext(newsContext);

	function handleRemove(e) {
		const btn = e.target,
			dataID = btn.dataset.id;

		if (!dataID) return;

		onRemove(dataID);
	}

	return (
		<div className='new'>
			<h3>{title}</h3>
			<p className='new__description'>
				{points} points by {author} | {num_comments} comments
			</p>
			<a
				href={url}
				target='_blank'
				rel='noreferrer'
				className='btn new__btn new__btn--read'
			>
				Read More
			</a>
			<button
				onClick={handleRemove}
				data-id={objectID}
				className='btn new__btn new__btn--remove'
			>
				Remove
			</button>
		</div>
	);
}

NewsPreview.defaultProps = {
	objectID: 1,
	title: 'Title of the new',
	url: '/',
	author: 'author',
	points: 0,
	num_comments: 0,
};
