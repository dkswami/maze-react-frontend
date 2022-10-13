import './manage-user-list-item.styles.scss';
import { ReactComponent as MazeIcon } from '../../assets/Maze.svg'
import { ReactComponent as ThreeDots } from '../../assets/three-dots.svg';

const ManageUserListItem = ({ user, HandleClick }) => {
	return (
		<div className='manage-user-item '>
			<MazeIcon className='user-list-dp' />
			<span className='manage-name'> {user.first_name} {user.last_name}</span>
			<span className='manage-number'> {user.phone_number}</span>
			<span className='manage-email'> {user.email}</span>
			<span className='manage-role'> {user.role}</span>
			{
				user.deactivated ? <button className='deactivated' onClick={() => HandleClick(user.id,false)}>Activate</button> : <button className='activated' onClick={() => HandleClick(user.id,true)}>Deactivate</button>
			}			
			<ThreeDots />
		</div>
	)
}

export default ManageUserListItem;