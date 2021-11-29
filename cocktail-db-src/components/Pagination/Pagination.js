import { useContext, useEffect } from 'react';
import { ReactComponent as LeftArrIcon } from '../../assets/left-arrow.svg';
import { ReactComponent as RightArrIcon } from '../../assets/right-arrow.svg';
import { recipesContext } from '../../context/recipesContext';

export default function Pagination() {
	const { setPage, page, totalPages } = useContext(recipesContext);

	useEffect(() => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	}, [page]);

	function getValidPage(page, min, max) {
		if (page < min) return Number(min);
		if (page >= max) return Number(max);
		return Number(page);
	}

	function handleClick(e) {
		const btn = e.target.closest('button');
		if (!btn.dataset.page) return;
		setPage((prevState) => getValidPage(btn.dataset.page, 1, totalPages));
	}

	return (
		<section className='pagination anima-appear-bottom'>
			<div className='container d-flex d-flex-jc-sb d-flex-ai-c'>
				<button
					className='btn btn--green pagination__btn pagination__btn--prev'
					title='Previous page'
					aria-label='Previous page'
					onClick={handleClick}
					data-page={page - 1}
					disabled={page === 1 ? true : false}
				>
					<LeftArrIcon className='icon' />
				</button>

				<p>
					{page} / {totalPages}
				</p>

				<button
					className='btn btn--green pagination__btn pagination__btn--next'
					title='Next page'
					aria-label='Next page'
					onClick={handleClick}
					data-page={page + 1}
					disabled={page === totalPages ? true : false}
				>
					<RightArrIcon className='icon' />
				</button>
			</div>
		</section>
	);
}
