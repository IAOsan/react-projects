import useFetch from './hooks/useFetch';
import { API_URL } from './config';
import './app.styles.scss';
import Card from './components/Card/Card';

export default function App() {
	const [data, isLoading, error, AJAX] = useFetch(API_URL, []);

	return (
		<main>
			{data && data.length > 0 && (
				<Card data={data[0]} onRandom={AJAX} isLoading={isLoading} />
			)}
		</main>
	);
}
