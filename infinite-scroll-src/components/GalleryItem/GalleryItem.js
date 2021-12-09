export default function GalleryItem({ data }) {
	if (data.length === 0 || !data?.user) return null;
	const {
		description,
		alt_description,
		likes,
		urls: { small },
		user: { name, profile_image },
	} = data;

	return (
		<figure className='gallery__item'>
			<img
				className='gallery__item-img'
				src={small}
				alt={alt_description || description}
			/>
			<figcaption className='gallery__item-label'>
				<p>{name}</p>
				<p>{likes} likes</p>
				<img
					className='gallery__item-user'
					src={profile_image?.small}
					alt={name}
				/>
			</figcaption>
		</figure>
	);
}
