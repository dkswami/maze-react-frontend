import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './manage-users.styles.scss'
import createUser from '../../assets/create-user.png'
import { ReactComponent as MazeIcon } from '../../assets/Maze.svg'
import { ReactComponent as ThreeDots } from '../../assets/three-dots.svg';
import { getAllUsers } from '../../utils/axios.api';

const ManageUserItem = ({ user }) => {
	return (
		<div className='manage-user-item '>
			<MazeIcon className='user-list-dp' />
			<span className='manage-name'> {user.first_name} {user.last_name}</span>
			<span className='manage-number'> {user.phone_number}</span>
			<span className='manage-email'> {user.email}</span>
			<button className='activated'>Deactivate</button>
			<ThreeDots />
		</div>
	)
}

const ManageUsers = () => {
	const [users, setUsers] = useState([]);
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
	}, [])

	return (
		<div className='manage-user-container'>
			<div className='manage-user-header'>
				<h3>List of Users</h3>
				<img src={createUser} alt='create user' onClick={()  => Navigate('/users/adduser')}/>
			</div>
			{users.map((user) => {
				return (
					<ManageUserItem key={user.id} user={user} />
				)
			})}
			<div className='manage-user-item deactivated'>
				<MazeIcon className='user-list-dp' />
				<span className='manage-name'>User name</span>
				<span className='manage-number'> 2345678765</span>
				<span className='manage-email'> dkswami@gmail.com</span>
				<button className='deactivated'>Activate</button>
				<ThreeDots />
			</div>
		</div>
	)
}

export default ManageUsers