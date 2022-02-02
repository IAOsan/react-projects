import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ErrorPage from './pages/ErrorPage';
import LoginPage from './pages/LoginPage';
import PrivateRoute from './pages/PrivateRoute';
import AuthWrapper from './components/AuthWrapper/AuthWrapper';
import './app.styles.scss';
// TODO optimize performance app
export default function App() {
	return (
		<AuthWrapper>
			<Router>
				<Switch>
					<PrivateRoute path='/' exact>
						<HomePage />
					</PrivateRoute>
					<Route path='/login' component={LoginPage} />
					<Route component={ErrorPage} />
				</Switch>
			</Router>
		</AuthWrapper>
	);
}
