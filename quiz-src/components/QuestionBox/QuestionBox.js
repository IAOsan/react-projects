import { useContext, useState } from 'react';
import { appContext } from '../../context/appContext';
import Modal from '../Modal/Modal';

export default function QuestionBox({ show }) {
	const {
		questions,
		indexQuestion,
		correctAnswers,
		modalIsOpen,
		selectedAnswer,
		onNextQuestion,
		checkAnswer,
		onSelectAnswer,
		totalQuestions,
	} = useContext(appContext);
	const [randomIndex, setRandomIndex] = useState(getRandomIndex(0, 4));

	if (!Array.isArray(questions) || questions.length === 0) return null;

	const { question, correct_answer, incorrect_answers } =
			questions[indexQuestion],
		answers = [...incorrect_answers],
		removedAnswers = answers.splice(randomIndex, 0, correct_answer);

	function handleNextQuestion({ target }) {
		const dataIndex = Number(target.dataset.index);

		if (!dataIndex) return;

		checkAnswer(correct_answer);
		onNextQuestion(dataIndex);
	}

	function handleSelectAnswer({ target }) {
		const dataAnswer = target.dataset.answer;

		if (!dataAnswer) return;

		onSelectAnswer(dataAnswer);
	}

	function getRandomIndex(min, max) {
		return Math.floor(Math.random() * (max - min) + min);
	}

	return (
		<>
			<div className='quiz__question-panel clearfix anima-appear-scale'>
				<p className='quiz__answers-counter'>
					<b>Correct Answers: {correctAnswers}</b>/ {totalQuestions}
				</p>

				<h2
					className='heading heading-3 text-center'
					dangerouslySetInnerHTML={{ __html: question }}
				/>

				<div className='quiz__answers-list'>
					{answers.map((answer, index) => {
						return (
							<button
								key={answer}
								onClick={handleSelectAnswer}
								data-answer={answer}
								className={`btn btn--primary btn--block quiz__single-answer ${
									selectedAnswer === answer ? 'active' : ''
								}`}
								dangerouslySetInnerHTML={{
									__html: answer,
								}}
							/>
						);
					})}
				</div>

				<button
					onClick={handleNextQuestion}
					data-index={indexQuestion + 1}
					className='btn btn--secondary text-bold quiz__next-question'
					disabled={indexQuestion + 1 > totalQuestions}
				>
					Next Question
				</button>
			</div>

			{modalIsOpen && <Modal />}
		</>
	);
}
