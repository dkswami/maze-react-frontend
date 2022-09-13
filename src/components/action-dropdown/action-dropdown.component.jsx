import axios from 'axios';
import './action-dropdown.styles.scss';

const ActionDropdown = ({ postId }) => {

	const deleteHandler = async () => {
		try {
			const response = await axios.delete(`http://localhost:3000/api/v1/posts/${postId}`);
			console.log(response);
		} catch (error) {
			console.error(error);
		}
	}

	return (
		<div className='action-dropdown-container'>
			<span onClick={deleteHandler}>Delete</span>
			{console.log(postId) }
		</div>
	)
}

export default ActionDropdown;