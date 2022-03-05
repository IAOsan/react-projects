import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProductsPage from './pages/ProductsPage';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Navigation from './components/Navigation/Navigation';
import CheckoutPage from './pages/CheckoutPage';
import PrivateRoute from './pages/PrivateRoute';
import ErrorPage from './pages/ErrorPage';
import './app.styles.scss';

export default function App() {
	return (
		<>
			<Header />
			<Navigation />
			<Switch>
				<Route path='/' exact component={HomePage} />
				<Route path='/about' component={AboutPage} />
				<Route path='/products/:id' component={ProductPage} />
				<Route path='/products' component={ProductsPage} />
				<PrivateRoute path='/checkout'>
					<CheckoutPage />
				</PrivateRoute>
				<Route path='/cart' component={CartPage} />
				<Route component={ErrorPage} />
			</Switch>
			<Footer />
		</>
	);
}
