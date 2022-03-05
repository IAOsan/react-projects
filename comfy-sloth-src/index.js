import ReactDOM from 'react-dom';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppContextProvider from './context/AppContext';
import ProductsContextProvider from './context/ProductsContext';
import FilterContextProvider from './context/FilterContext';
import CartContextProvider from './context/CartContext';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';
import { CLIENT_ID, DOMAIN } from './config';

ReactDOM.render(
	<React.StrictMode>
		<Router>
			<Auth0Provider
				domain={DOMAIN}
				clientId={CLIENT_ID}
				cacheLocation='localstorage'
				redirectUri={window.location.origin}
			>
				<AppContextProvider>
					<ProductsContextProvider>
						<FilterContextProvider>
							<CartContextProvider>
								<App />
							</CartContextProvider>
						</FilterContextProvider>
					</ProductsContextProvider>
				</AppContextProvider>
			</Auth0Provider>
		</Router>
	</React.StrictMode>,
	document.getElementById('root')
);
