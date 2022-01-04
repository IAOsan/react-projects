import { useContext } from 'react';
import { appContext } from './context/appContext';
import SetupForm from './components/SetupForm/SetupForm';
import QuestionBox from './components/QuestionBox/QuestionBox';
import Spinner from './components/Spinner/Spinner';
import './app.styles.scss';

export default function App() {
	const { isLoading, isSubmitting, error } = useContext(appContext);

	if (isLoading) return <Spinner />;

	return (
		<main>
			<div className='container d-flex d-flex-ai-c d-flex-jc-c'>
				{isSubmitting && !error ? <QuestionBox /> : <SetupForm />}
			</div>
		</main>
	);
}
