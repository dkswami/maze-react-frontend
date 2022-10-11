import './user-list.styles.scss';
import { ReactComponent as MazeLogo } from '../../assets/Maze.svg';
import { ReactComponent as ThreeDots } from '../../assets/three-dots.svg';

const UserList = () => {
	return (
		<div className='user-list'>
			<div className='user-list-header'>
				<h2>Users List</h2>
				<ThreeDots />
			</div>
			<div className='user-list-body'>
				<div className='user-list-item'>
					<MazeLogo className='user-list-dp' />
					<span>User Name</span>
				</div>
				<div className='user-list-item'>
					<MazeLogo className='user-list-dp' />
					<span>User Name</span>
				</div>
			</div>
		</div>
	)
}

export default UserList