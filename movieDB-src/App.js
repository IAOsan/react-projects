import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import MovieDetails from './pages/movieDetails';
import MoviesProvider from './context/moviesContext';
import './app.styles.scss';

export default function App() {
	return (
		<Router>
			<MoviesProvider>
				<Switch>
					<Route path='/' exact component={Home} />
					<Route path='/movie/:id' component={MovieDetails} />
					<Route>
						<p>Page doest exist</p>
					</Route>
				</Switch>
			</MoviesProvider>
		</Router>
	);
}
