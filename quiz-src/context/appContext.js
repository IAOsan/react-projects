import { createContext, useEffect, useState } from 'react';
import {
	API_URL,
	CATEGORIES_CODES,
	RESPONSE_CODES,
	QUIZ_OPTIONS,
} from '../config';

export const appContext = createContext();
export default function AppProvider({ children }) {
	const [questions, setQuestions] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);
	const [quiz, setQuiz] = useState(QUIZ_OPTIONS);
	const [indexQuestion, setIndexQuestion] = useState(0);
	const [correctAnswers, setCorrectAnswers] = useState(0);
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [modalIsOpen, setModalIsOpen] = useState(false);
	const [selectedAnswer, setSelectedAnswer] = useState('');
	const url = `${API_URL}?amount=${quiz.amount}&category=${
		CATEGORIES_CODES[quiz.category]
	}&difficulty=${quiz.difficulty}&type=multiple`;
	const totalQuestions = questions?.length;

	useEffect(() => {
		if (!isSubmitting) return;

		(async function () {
			setIsLoading((prevState) => true);
			try {
				const request = await fetch(url),
					response = await request.json(),
					responseCode = response.response_code;

				if (!request.ok)
					throw new Error(`${request.status} ${request.statusText}`);
				if (responseCode && responseCode !== 0)
					throw new Error(`${RESPONSE_CODES[responseCode]}`);

				setIsLoading((prevState) => false);
				setError((prevState) => null);
				setQuestions((prevState) => response.results);
			} catch (error) {
				setIsLoading((prevState) => false);
				setError((prevState) => error);
			}
		})();
	}, [isSubmitting, url]);

	function onNextQuestion(index) {
		setIndexQuestion((prevState) => {
			return index > totalQuestions - 1 ? 0 : index;
		});

		setModalIsOpen((prevState) => {
			return index + 1 > totalQuestions ? !prevState : prevState;
		});
	}

	function checkAnswer(correctAnswer) {
		setCorrectAnswers((prevState) => {
			return selectedAnswer === correctAnswer ? prevState + 1 : prevState;
		});
	}

	function onSelectAnswer(answer) {
		setSelectedAnswer((prevState) => answer);
	}

	function onPlayAgain() {
		setIsSubmitting((prevState) => false);
		setIndexQuestion((prevState) => 0);
		setCorrectAnswers((prevState) => 0);
		setModalIsOpen((prevState) => !prevState);
	}

	return (
		<appContext.Provider
			value={{
				quiz,
				setQuiz,
				isLoading,
				error,
				isSubmitting,
				setIsSubmitting,
				questions,
				indexQuestion,
				setIndexQuestion,
				correctAnswers,
				setCorrectAnswers,
				modalIsOpen,
				setModalIsOpen,
				selectedAnswer,
				setSelectedAnswer,
				onNextQuestion,
				checkAnswer,
				onSelectAnswer,
				onPlayAgain,
				totalQuestions,
			}}
		>
			{children}
		</appContext.Provider>
	);
}
