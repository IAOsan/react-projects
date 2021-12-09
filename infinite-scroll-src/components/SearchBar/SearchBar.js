import { useEffect, useState } from 'react';
import { ReactComponent as MagnifyingIcon } from '../../assets/magnifying-glass.svg';

export default function SearchBar({ handleSearch }) {
	const [query, setQuery] = useState('');
	const [error, setError] = useState(null);
	const [isSubmitting, setIsSubmitting] = useState(false);

	useEffect(() => {
		if (isSubmitting && !error) {
			handleSearch(query);
			setIsSubmitting((prevState) => false);
		}
	}, [error, isSubmitting]);

	function handleChange(e) {
		setQuery((prevState) => e.target.value);
	}

	function handleSubmit(e) {
		e.preventDefault();

		setError((prevState) => checkInput(query));
		setIsSubmitting((prevState) => true);
	}

	function checkInput(value) {
		let err = null;

		if (!value) err = 'Please enter a query';

		return err;
	}

	return (
		<form onSubmit={handleSubmit} className='form'>
			<div className='container'>
				<div className='form__group'>
					<input
						onChange={handleChange}
						className={`form__control ${error ? 'invalid' : ''}`}
						type='text'
						name='inputQuery'
						id='inputQuery'
						placeholder='Search'
					/>
					<label className='form__label' htmlFor='inputQuery'>
						Search
					</label>
					<button className='form__submit' type='submit'>
						<MagnifyingIcon className='icon form__submit-icon' />
					</button>
					{error && <p className='form__invalid-msg'>{error}</p>}
				</div>
			</div>
		</form>
	);
}
