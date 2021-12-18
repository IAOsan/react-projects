import { useContext, useEffect, useRef, useState } from 'react';
import { newsContext } from '../../context/newsContext';
import { DEBOUNCE_TIME } from '../../config';

export default function Paginator() {
	const { page, totalPages, setPage } = useContext(newsContext);
	const [inputValue, setInputValue] = useState(page);
	const inputRef = useRef(null);

	useEffect(() => {
		const input = inputRef.current,
			value = Number(input.value);

		input.style = `${
			value.toString().length > 1
				? `width: ${value.toString().length * 2.3}rem`
				: ''
		}`;

		if (value < 0 || value > totalPages) return;

		const debounce = setTimeout(() => {
			if (inputValue === value) {
				setPage(inputValue);
			}
		}, DEBOUNCE_TIME * 1000);

		return () => clearTimeout(debounce);
	}, [inputValue]);

	function handleClick(e) {
		const btn = e.target,
			dataPage = Number(btn.dataset.page);

		if (!dataPage && dataPage !== 0) return;

		setPage(dataPage);
	}

	function handleChange(e) {
		setInputValue((prevState) => Number(e.target.value));
	}

	return (
		<div className='pagination d-flex d-flex-ai-c d-flex-jc-c'>
			<button
				onClick={handleClick}
				data-page={page - 1}
				className='btn btn--primary'
				disabled={page === 0}
			>
				Prev
			</button>
			<input
				onChange={handleChange}
				type='number'
				value={inputValue}
				className='pagination__input'
				ref={inputRef}
				min='0'
				max={totalPages.toString()}
			/>
			<p className='pagination__pages'>of {totalPages}</p>
			<button
				onClick={handleClick}
				data-page={page + 1}
				className='btn btn--primary'
				disabled={page === totalPages}
			>
				Next
			</button>
		</div>
	);
}
