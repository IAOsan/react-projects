import { useEffect, useRef, useState, useContext } from 'react';
import { DEBOUNCE_TIME } from '../../config';
import { moviesContext } from '../../context/moviesContext';

export default function SearchBar() {
	const [name, setName] = useState('estado inicial');
	const { setQuery, error } = useContext(moviesContext);
	const inputRef = useRef();

	useEffect(() => {
		setTimeout(() => {
			if (inputRef.current.value === name) {
				setQuery((prevState) => name);
			}
		}, DEBOUNCE_TIME * 1000);
	}, [name]);

	function handleChange(e) {
		setName((prevState) => e.target.value);
	}

	function handleSubmit(e) {
		e.preventDefault();
	}

	return (
		<form onSubmit={handleSubmit} className='form'>
			<div className='container'>
				<h1 className='heading-2'>Search Movies</h1>
				<div className='form__group'>
					<input
						onChange={handleChange}
						className='form__control'
						type='text'
						id='inputQuery'
						placeholder='Search movie'
						ref={inputRef}
					/>
					<label className='form__label' htmlFor='inputQuery'>
						Search
					</label>
					{error && (
						<p className='form__invalid-msg'>{error.toString()}</p>
					)}
				</div>
			</div>
		</form>
	);
}
