import { useState, useContext, useEffect, useRef } from 'react';
import { ReactComponent as SearchIcon } from '../../assets/magnifying-glass.svg';
import { newsContext } from '../../context/newsContext';
import { DEBOUNCE_TIME } from '../../config';

export default function SearchBar() {
	const { handleSearch, query } = useContext(newsContext);
	const [inputValue, setInputValue] = useState(query);
	const [isTyping, setIsTyping] = useState(false);
	const inputRef = useRef(null);

	useEffect(() => {
		const debounce = setTimeout(() => {
			if (isTyping && inputValue === inputRef.current?.value) {
				handleSearch(inputValue);
			}
		}, DEBOUNCE_TIME * 1000);

		return () => clearTimeout(debounce);
	}, [inputValue, isTyping]);

	function handleSubmit(e) {
		e.preventDefault();
	}

	function handleChange(e) {
		if (!isTyping) setIsTyping((prevState) => true);

		setInputValue((prevState) => e.target?.value.trim());
	}

	return (
		<form onSubmit={handleSubmit} className='form'>
			<div className='form__group'>
				<input
					onChange={handleChange}
					id='inputSearch'
					type='text'
					className='form__control'
					placeholder='Search'
					ref={inputRef}
					value={inputValue}
				/>
				<label htmlFor='inputSearch' className='form__label'>
					Search
				</label>
				<SearchIcon className='icon form__control-icon' />
			</div>
		</form>
	);
}
