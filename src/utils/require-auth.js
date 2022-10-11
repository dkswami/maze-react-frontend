import { Navigate, useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../contexts/user.context';

const RequireAuth = ({ children }) => {
	const { currentUser} = useContext(UserContext);
	const location = useLocation();
	const access_token = localStorage.getItem('access_token')
	if(!access_token) {
		return <Navigate to={{ pathname: '/login', state: { from: location } }} />
	}
	return children;
}

export default RequireAuth