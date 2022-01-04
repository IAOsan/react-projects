import { useContext } from 'react';
import { appContext } from '../../context/appContext';
import { MAX_AMOUNT } from '../../config';

export default function SetupForm() {
	const { quiz, setQuiz, setIsSubmitting, error } = useContext(appContext);

	function handleChange({ target }) {
		setQuiz((prevState) => {
			return { ...prevState, [target.name]: target.value };
		});
	}

	function handleSubmit(e) {
		e.preventDefault();

		setIsSubmitting((prevState) => {
			return error ? false : true;
		});
	}

	return (
		<div className='quiz__setup anima-appear-scale'>
			<h2 className='heading heading-3'>Setup Quiz</h2>

			<form onSubmit={handleSubmit} className='form quiz__setup-form'>
				<div className='form__group'>
					<label
						className='form__label'
						htmlFor='inputNumberQuestions'
					>
						Number of Questions
					</label>
					<input
						onChange={handleChange}
						className='form__control'
						type='number'
						name='amount'
						id='inputNumberQuestions'
						min='1'
						max={MAX_AMOUNT}
						defaultValue={quiz.amount}
					/>
				</div>
				<div className='form__group'>
					<label className='form__label' htmlFor='inputCategory'>
						Category
					</label>
					<select
						onChange={handleChange}
						className='form__control'
						name='category'
						id='inputCategory'
						defaultValue={quiz.category}
					>
						<option value='sports'>sports</option>
						<option value='history'>history</option>
						<option value='politics'>politics</option>
					</select>
				</div>
				<div className='form__group'>
					<label className='form__label' htmlFor='inputDifficulty'>
						Select Difficult
					</label>
					<select
						onChange={handleChange}
						className='form__control'
						name='difficulty'
						id='inputDifficulty'
						defaultValue={quiz.difficulty}
					>
						<option value='easy'>easy</option>
						<option value='medium'>medium</option>
						<option value='hard'>hard</option>
					</select>
				</div>
				{error && <p className='form__error'>{error.toString()}</p>}
				<button
					className='btn btn--secondary btn--block text-bold'
					type='submit'
				>
					Start
				</button>
			</form>
		</div>
	);
}
