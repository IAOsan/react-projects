import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import RecipesProvider from './context/recipesContext';
import Header from './components/Header/Header';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import DrinkDetails from './pages/DrinkDetails';
import NotFound from './pages/NotFound';
import './app.styles.scss';

export default function App() {
	return (
		<Router>
			<RecipesProvider>
				<Route component={Header} />
				<Switch>
					<Route path='/' exact component={Home} />
					<Route path='/about' component={AboutUs} />
					<Route path='/drink/:id' component={DrinkDetails} />
					<Route component={NotFound} />
				</Switch>
			</RecipesProvider>
		</Router>
	);
}
