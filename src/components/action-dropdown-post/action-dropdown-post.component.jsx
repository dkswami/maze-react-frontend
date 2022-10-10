import axios from 'axios';
import { Link } from 'react-router-dom';
import { ReactComponent as DeleteIcon } from '../../assets/delete-icon.svg';
import { ReactComponent as EditIcon } from '../../assets/edit-post.svg';
import './action-dropdown-post.styles.scss';

const ActionDropdownPost = ({ postId }) => {

	const deleteHandler = async () => {
		if (window.confirm("Do you want to delete this post?")) {
			try {
				const access_token = localStorage.getItem('access_token')
				const config = {
					headers: {
						Authorization: `Bearer ${access_token}`,
					},
				}
				const response = await axios.delete(`http://localhost:3000/api/v1/posts/${postId}`, config);
				console.log(response);
				alert("Post deleted successfully!");
				window.location.reload();
			} catch (error) {
				console.error(error);
				alert(`Error occured ${error}`);
			}
		}
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

export default ActionDropdownPost;