import { useContext } from 'react';
import { appContext } from '../../context/appContext';

export default function Modal() {
	const { correctAnswers, onPlayAgain, totalQuestions } =
		useContext(appContext);
	const percentageAnswered = (
		(correctAnswers / totalQuestions) *
		100
	).toFixed(0);

	return (
		<>
			<div className='overlay anima-appear'></div>
			<div className='modal anima-appear-scale'>
				<h3 className='heading-2'>Congrats!</h3>
				<p className='modal__text'>
					You answered {percentageAnswered}% of questions correctly
				</p>
				<button
					onClick={onPlayAgain}
					className='btn btn--secondary btn--lg'
				>
					Play Again
				</button>
			</div>
		</>
	);
}
