import { useAuth0 } from '@auth0/auth0-react';
import Spinner from '../Spinner/Spinner';

export default function AuthWrapper({ children }) {
	const { isLoading, error } = useAuth0();

	if (isLoading) {
		return <Spinner size='lg' />;
	}

	if (error) {
		return <h1>Oops..., {error}</h1>;
	}

	return children;
}
