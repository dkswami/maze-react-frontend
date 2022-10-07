import {  useContext } from 'react';
import './profile.styles.scss';
import { UserContext } from '../../contexts/user.context';

const Profile = () => {
	const { currentUser } = useContext(UserContext);

	return (
		<div className='profile-container'>
			<div className='profile-data'>
				<h5>First Name</h5>
				<span>{ currentUser.first_name ? currentUser.first_name : 'Nill'}</span>
			</div>
			<div className='profile-data'>
				<h5>Last Name</h5>
				<span>{ currentUser.last_name ? currentUser.last_name : 'Nill'}</span>
			</div>
			<div className='profile-data'>
				<h5>Phone Number</h5>
				<span>{ currentUser.phone_number ? currentUser.phone_number : 'Nill'}</span>
			</div>
			<div className='profile-data'>
				<h5>Email</h5>
				<span>{ currentUser.email }</span>
			</div>
			<div className='profile-data'>
				<h5>Role</h5>
				<span>{ currentUser.role }</span>
			</div>
		</div>
	)
}

export default Profile