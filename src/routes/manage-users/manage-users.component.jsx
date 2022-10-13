import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './manage-users.styles.scss'
import createUser from '../../assets/create-user.png'
import { getAllUsers } from '../../utils/axios.api';
import ManageUserListItem from '../../components/manage-user-list-item/manage-user-list-item.component';
import { ChangeDeactivatedUser } from '../../utils/axios.api';


const ManageUsers = () => {
	const [users, setUsers] = useState([]);
	const [activateStatus, setActivateStatus] = useState(false);
	const Navigate = useNavigate();

	useEffect(() => {
		const access_token = localStorage.getItem('access_token')
		const getUsers = async () => {
			try {
				const response = await getAllUsers(access_token);
				if (response) {
					setUsers(response);
				}
			} catch (error) {
				console.log(error)
			}
		}
		getUsers()
	}, [activateStatus])

	const HandleDeactivateUser = async (userId, activationStatus) => {
		const deactivatedData = {
			id: userId,
			deactivated: activationStatus
		}
		setActivateStatus(!activateStatus)
		const access_token = localStorage.getItem('access_token')
		const response = await ChangeDeactivatedUser(deactivatedData, access_token);
		console.log(response);
		if (response.error === 'cannot deactivate admin') {
			alert('Cannot deactivate admin');
		}
	}

	return (
		<div className='manage-user-container'>
			<div className='manage-user-header'>
				<h3>List of Users</h3>
				<img src={createUser} alt='create user' onClick={() => Navigate('/users/adduser')} />
			</div>
			{users.map((user) => {
				return (
					<ManageUserListItem key={user.id} user={user} HandleClick={HandleDeactivateUser} />
				)
			})}
		</div>
	)
}

export default ManageUsers