import { useState } from 'react';

export default function ProductPreview({ images }) {
	const { url, id } = images[0];
	const [mainImage, setMainImage] = useState({ id, url });

	function handleChangeImage({ target }) {
		const dataURL = target.dataset.url,
			dataID = target.dataset.id;

		if (!dataURL && !dataID) return;

		setMainImage((prevState) => ({ id: dataID, url: dataURL }));
	}

	return (
		<article className='product-preview'>
			<div className='img-box img-box--5-4'>
				<img
					className='pos-abs pos-centered'
					src={mainImage.url}
					alt=''
				/>
			</div>

			<div className='row row--gutter-sm product-preview__grid'>
				{images.map(({ id, thumbnails, url }) => {
					const thumbnailClassname = `img-box img-box--5-4 product-preview__thumbnail ${
						mainImage.id === id && 'active'
					}`;

					return (
						<div key={id} className='col-auto'>
							<div
								onClick={handleChangeImage}
								className={thumbnailClassname}
							>
								<img
									src={thumbnails.large.url}
									className='pos-abs pos-centered'
									data-url={url}
									data-id={id}
									alt=''
								/>
							</div>
						</div>
					);
				})}
			</div>
		</article>
	);
}

ProductPreview.defaultProps = {
	images: [
		{
			id: '',
			url: '',
			thumbnails: {
				large: {
					url: '',
				},
			},
		},
	],
};
