import { Route, Redirect } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

export default function PrivateRoute({ children, ...restProps }) {
	const { isAuthenticated, user } = useAuth0();
	const canDisplayChildren = isAuthenticated && user;

	return (
		<Route
			{...restProps}
			render={() =>
				canDisplayChildren ? children : <Redirect to='/login' />
			}
		/>
	);
}
