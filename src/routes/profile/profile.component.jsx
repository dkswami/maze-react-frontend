import userEvent from '@testing-library/user-event';
import { useEffect, useContext, useState } from 'react';
import './profile.styles.scss';
import { UserContext } from '../../contexts/user.context';
import { getCurrentUser } from '../../utils/axios.api';

const Profile = () => {
	const [ userData, setUserData] = useState({})
	const getUserData = async () => {
		const access_token = localStorage.getItem('access_token');

		const response = await getCurrentUser(access_token)
		setUserData(response);
	}

	useEffect(() => {
		getUserData();
	}, [])

	return (
		<div className='profile-container'>
			<div className='profile-data'>
				<h5>First Name</h5>
				<span>{ userData.first_name ? userData.first_name : 'Nill'}</span>
			</div>
			<div className='profile-data'>
				<h5>Last Name</h5>
				<span>{ userData.last_name ? userData.last_name : 'Nill'}</span>
			</div>
			<div className='profile-data'>
				<h5>Phone Number</h5>
				<span>{ userData.phone_number ? userData.phone_number : 'Nill'}</span>
			</div>
			<div className='profile-data'>
				<h5>Email</h5>
				<span>{ userData.email }</span>
			</div>
			<div className='profile-data'>
				<h5>Role</h5>
				<span>{ userData.role }</span>
			</div>
		</div>
	)
}

export default Profile