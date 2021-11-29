import { useContext, useEffect, useRef, useState } from 'react';
import { recipesContext } from '../../context/recipesContext';
import { DEBOUNCE_TIME } from '../../config';

export default function SearchBar({ isVisible }) {
	const [name, setName] = useState('');
	const { handleSearch } = useContext(recipesContext);
	const inputRef = useRef();

	useEffect(() => {
		const debounce = setTimeout(() => {
			if (name === inputRef.current.value) {
				handleSearch(name);
			}
		}, DEBOUNCE_TIME);
		return () => {
			clearTimeout(debounce);
		};
	}, [name]);

	function handleChange(e) {
		setName((prevState) => e.target.value);
	}

	function handleSubmit(e) {
		e.preventDefault();
	}

	return (
		<form
			onSubmit={handleSubmit}
			className={`form anima-appear ${!isVisible ? 'd-none' : ''}`}
		>
			<div className='form__group'>
				<input
					ref={inputRef}
					onChange={handleChange}
					className='form__control'
					type='text'
					name='name'
					id='inputName'
					placeholder='Search your favorite cocktail'
					value={name}
				/>
			</div>
		</form>
	);
}
