import axios from 'axios';
import { ReactComponent as DeleteIcon } from '../../assets/delete-icon.svg';
import './action-dropdown.styles.scss';

const ActionDropdown = ({ postId }) => {

	
	const deleteHandler = async () => {
		if(window.confirm("Do you want to delete this post?")) {
			try {
				const response = await axios.delete(`http://localhost:3000/api/v1/posts/${postId}`);
				console.log(response);
			} catch (error) {
				console.error(error);
			}
		}
	}

	return (
		<div className='action-dropdown-container'>
			<div className='delete-action' onClick={deleteHandler}>
				<DeleteIcon />
				<span>Delete</span>
				{/* {console.log(postId) } */}
			</div>
			
		</div>
	)
}

export default ActionDropdown;