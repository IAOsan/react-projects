import NewsProvider from './context/newsContext';
import Header from './components/Header/Header';
import NewsList from './components/NewsList/NewsList';
import './app.styles.scss';

export default function App() {
	return (
		<NewsProvider>
			<Header />
			<NewsList />
		</NewsProvider>
	);
}
