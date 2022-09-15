import axios from 'axios';
import { Link } from 'react-router-dom';
import { ReactComponent as DeleteIcon } from '../../assets/delete-icon.svg';
import { ReactComponent as EditIcon } from '../../assets/edit-post.svg';
import './action-dropdown.styles.scss';

const ActionDropdown = ({ postId }) => {

	const deleteHandler = async () => {
		if (window.confirm("Do you want to delete this post?")) {
			try {
				const response = await axios.delete(`http://localhost:3000/api/v1/posts/${postId}`);
				console.log(response);
				alert("Post deleted successfully!");
				window.location.reload();
			} catch (error) {
				console.error(error);
				alert(`Error occured ${error}`);
			}
		}
	}

	const editHandler = async () => {

	}

	return (
		<div className='action-dropdown-container'>
			<div className='delete-action' onClick={deleteHandler}>
				<DeleteIcon />
				<span>Delete</span>
			</div>
			<Link to={'edit/' + postId}>
				<div className='edit-action'>
					<EditIcon />
					<span>Edit</span>
				</div>
			</Link>
		</div>
	)
}

export default ActionDropdown;