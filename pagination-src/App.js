import React, { useEffect, useState } from 'react';
import Pagination from './components/Pagination/Pagination';
import FollowersList from './components/FollowersList/FollowersList';
import FollowerPreview from './components/FollowerPreview/FollowerPreview';
import Spinner from './components/Spinner/Spinner';
import useFetch from './hooks/useFetch';
import { API_URL, RESULTS_PER_PAGE } from './config';
import './app.styles.scss';

export default function App() {
	const [data, isLoading, error] = useFetch(API_URL, []);
	const [page, setPage] = useState(1);
	const [totalPages, setTotalPages] = useState([]);
	const [pagination, setPagination] = useState([]);
	const pagesLength = Math.ceil(data.length / RESULTS_PER_PAGE);

	useEffect(() => {
		const from = (page - 1) * RESULTS_PER_PAGE,
			to = page * RESULTS_PER_PAGE;

		setPagination((prevState) => data.slice(from, to));
		setTotalPages((prevState) => getAllPages([]));

		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	}, [data, page]);

	function getAllPages(arr) {
		for (let index = 1; index <= pagesLength; index++) {
			arr.push(index);
		}
		return arr;
	}

	function handleClick(e) {
		const btn = e.target.closest('button'),
			dataPage = Number(btn.dataset.page);

		if (dataPage < 1 || dataPage >= pagesLength + 1) return;

		setPage((prevState) => dataPage);
	}

	if (isLoading) return <Spinner />;

	return (
		<main>
			<h1 className='heading-2 heading-main text-center'>Pagination</h1>
			<FollowersList>
				{Array.isArray(pagination) &&
					pagination.length > 0 &&
					pagination.map(({ id, avatar_url, html_url, login }) => (
						<div
							key={id.toString()}
							className='col-lg-3 col-md-4 col-sm-6'
						>
							<FollowerPreview
								image={avatar_url}
								url={html_url}
								name={login}
							/>
						</div>
					))}
			</FollowersList>

			<Pagination>
				<button
					onClick={handleClick}
					data-page={page - 1}
					className='btn pagination__btn pagination__btn--prev'
				>
					Prev
				</button>
				{Array.isArray(totalPages) &&
					totalPages.length > 0 &&
					totalPages.map((p) => (
						<button
							onClick={handleClick}
							key={p}
							data-page={p}
							className={`btn btn--blue pagination__btn ${
								page === p ? 'active' : ''
							}`}
						>
							{p}
						</button>
					))}
				<button
					onClick={handleClick}
					data-page={page + 1}
					className='btn pagination__btn pagination__btn--next'
				>
					Next
				</button>
			</Pagination>
		</main>
	);
}
