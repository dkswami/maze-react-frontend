import './manage-users.styles.scss'
import createUser from '../../assets/create-user.png'
import { ReactComponent as MazeIcon } from '../../assets/Maze.svg'
import { ReactComponent as ThreeDots } from '../../assets/three-dots.svg';

const ManageUsers = () => {
	return (
		<div className='manage-user-container'>
			<div className='manage-user-header'>
				<h3>List of Users</h3>
				<img src={createUser} alt='create user' />
			</div>
			<div className='manage-user-item '>
				<MazeIcon className='user-list-dp' />
				<span className='manage-name'>User name</span>
				<span className='manage-number'> 2345678765</span>
				<span className='manage-email'> dkswami@gmail.com</span>
				<button className='activated'>Deactivate</button>
				<ThreeDots />
			</div>
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