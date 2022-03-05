import { Route, Redirect } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

export default function PrivateRoute({ children, ...restProps }) {
	const { isAuthenticated } = useAuth0();

	return (
		<Route
			{...restProps}
			render={() =>
				isAuthenticated ? children : <Redirect to={{ pathname: '/' }} />
			}
		/>
	);
}
