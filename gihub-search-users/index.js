import ReactDOM from 'react-dom';
import React from 'react';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';
import GithubContextProvider from './context/githubContext';

const domain = process.env.REACT_APP_AUTH_DOMAIN,
	clientId = process.env.REACT_APP_AUTH_CLIENT_ID;

ReactDOM.render(
	<React.StrictMode>
		<Auth0Provider
			domain={domain}
			clientId={clientId}
			redirectUri={window.location.origin}
			cacheLocation='localstorage'
		>
			<GithubContextProvider>
				<App />
			</GithubContextProvider>
		</Auth0Provider>
	</React.StrictMode>,
	document.getElementById('root')
);
