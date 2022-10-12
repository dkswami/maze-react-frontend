import './user-list.styles.scss';
import { ReactComponent as MazeLogo } from '../../assets/Maze.svg';
import { ReactComponent as ThreeDots } from '../../assets/three-dots.svg';
import { useEffect, useState } from 'react';
import { getAllUsers } from '../../utils/axios.api';

const UserListItem = ({user}) => {
	return (
		<div className='user-list-body'>
			<div className='user-list-item'>
				<MazeLogo className='user-list-dp' />
				<span>{user.first_name} {user.last_name}</span>
			</div>
		</div>
	)
}

const UserList = () => {
	const [users, setUsers] = useState([]);

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
		<div className='user-list'>
			<div className='user-list-header'>
				<h2>Users List</h2>
				<ThreeDots />
			</div>
			{users.map((user) => {
				return (
					<UserListItem key={user.id} user={user} />
				)
			})}

		</div>
	)
}

export default UserList