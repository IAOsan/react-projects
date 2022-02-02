import { useState } from 'react';
import { useGithubContext } from '../../context/githubContext';
import { MagnifyingGlassIcon } from '../../icons';

export default function SearchBar() {
	const [inputValue, setInputValue] = useState('');
	const {
		requests: { limit, remaining },
		error,
		searchGithubUser,
		isLoading,
	} = useGithubContext();

	function handleChange({ target }) {
		setInputValue((prevState) => target.value);
	}

	function handleSubmit(e) {
		e.preventDefault();

		if (inputValue) {
			searchGithubUser(inputValue);
		}
	}

	return (
		<section>
			<div className='container'>
				{error && (
					<p className='text-danger font-s-sm'>{error.message}</p>
				)}
				<div className='row'>
					<div className='col-xl-9 col-lg-8 col-md-7'>
						<form onSubmit={handleSubmit} className='form'>
							<div className='search-bar bg-light box-shadow'>
								<div className='form__control-box d-inline-block'>
									<MagnifyingGlassIcon className='icon d-inline-block form__control-icon' />
									<input
										onChange={handleChange}
										value={inputValue}
										className='form__control bg-light'
										type='text'
										placeholder='Enter Github User'
										disabled={isLoading}
									/>
								</div>
								<button
									disabled={remaining === 0 || isLoading}
									title={
										!remaining
											? `You don't have remaining requests`
											: ''
									}
									className='btn btn--primary'
								>
									Search
								</button>
							</div>
						</form>
					</div>

					<div className='col-xl-3 col-lg-4 col-md-5'>
						<p className='search-bar__label text-muted'>
							Request: {remaining} / {limit}
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
