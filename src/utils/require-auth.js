import { Navigate, Outlet} from 'react-router-dom';

const RequireAuth = () => {
	const access_token = localStorage.getItem('access_token')

	return (
		access_token ? <Outlet /> : <Navigate to='/login' />
	)	
}

export default RequireAuth