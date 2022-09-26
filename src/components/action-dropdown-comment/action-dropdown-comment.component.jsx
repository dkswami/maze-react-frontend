import { useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

import { ReactComponent as DeleteIcon } from '../../assets/delete-icon.svg';
import { ReactComponent as EditIcon } from '../../assets/edit-post.svg';


const DefaultupdatedComment = {
	body: ""
}

const ActionDropdownComment = ({ comment }) => {
	const [show, setShow] = useState(false);
	const [updatedComment, setUpdatedComment ] = useState(DefaultupdatedComment);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);


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

	const onChangeHandler = (event) => {
		const bodyValue = event.target.value;
		setUpdatedComment({ body:`${bodyValue}`});
	}

	const editHandler = async () => {
		try {
			const response = await axios.patch(`http://localhost:3000/api/v1/comments/${comment.id}`, updatedComment);
			alert("Comment saved successfully!");
			window.location.href = '/users/';
		} catch (error) {
			console.error(error);
		}
		handleClose();
	}

	return (
		<>
			<div className='action-dropdown-container'>
				<div className='delete-action' onClick={deleteHandler}>
					<DeleteIcon />
					<span>Delete</span>
				</div>
				<div className='edit-action' onClick={handleShow}>
					<EditIcon />
					<span>Edit</span>
				</div>
			</div>
			<Modal show={show} onHide={editHandler}>
				<Modal.Header >
					<Modal.Title>Edit Comment</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form>
						<Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1"	>
							<Form.Label>Example textarea</Form.Label>
							<Form.Control as="textarea" rows={3} defaultValue={comment.attributes.body} onChange={onChangeHandler} autoFocus/>
						</Form.Group>
					</Form>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Close
					</Button>
					<Button variant="primary" onClick={editHandler}>
						Save Changes
					</Button>
				</Modal.Footer>
			</Modal>
		</>


	)
}

export default ActionDropdownComment;