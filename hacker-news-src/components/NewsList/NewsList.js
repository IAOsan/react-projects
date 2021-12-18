import { useContext } from 'react';
import { newsContext } from '../../context/newsContext';
import NewsPreview from '../NewsPreview/NewsPreview';
import Paginator from '../Paginator/Paginator';
import Spinner from '../Spinner/Spinner';

export default function NewsList() {
	const { isLoading, hits } = useContext(newsContext);

	if (isLoading) return <Spinner />;

	return (
		<main>
			<Paginator />
			<section className='news'>
				<div className='container'>
					<div className='row'>
						{hits.map((item) => {
							const props = {
								objectID: item.objectID,
								title: item.title,
								url: item.url,
								author: item.author,
								points: item.points,
								num_comments: item.num_comments,
							};

							return (
								<div key={item.objectID} className='col-lg-6'>
									<NewsPreview {...props} />
								</div>
							);
						})}
					</div>
				</div>
			</section>
		</main>
	);
}
