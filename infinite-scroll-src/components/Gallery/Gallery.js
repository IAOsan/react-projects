import React from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';

const Gallery = React.forwardRef(function (props, ref) {
	const { data } = props;

	return (
		<div className='gallery' ref={ref}>
			<div className='container'>
				<div className='row'>
					{Array.isArray(data) &&
						data.length > 0 &&
						data.map((item) => {
							return (
								<div
									key={item.id}
									className='col-lg-4 col-md-6'
								>
									<GalleryItem data={item} />
								</div>
							);
						})}
				</div>
			</div>
		</div>
	);
});

export default Gallery;
