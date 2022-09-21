import axios from 'axios';
import { Link } from 'react-router-dom';
import { ReactComponent as DeleteIcon } from '../../assets/delete-icon.svg';
import { ReactComponent as EditIcon } from '../../assets/edit-post.svg';


const ActionDropdownComment = ({ comment }) => {
	console.log(comment.id);
	const deleteHandler = async () => {
		if (window.confirm("Do you want to delete this comment?")) {
			try {
				const response = await axios.delete(`http://localhost:3000/api/v1/comments/${comment.id}`);
				console.log(response);
				alert("comment deleted successfully!");
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
			{/* <Link> */}
				<div className='edit-action'>
					<EditIcon />
					<span>Edit</span>
				</div>
			{/* </Link> */}
		</div>
	)
}

export default ActionDropdownComment;