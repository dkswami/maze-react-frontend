import { useState } from 'react';
import axios from 'axios';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { ReactComponent as ThreeDots } from '../../assets/three-dots.svg';
import { ReactComponent as SingleDot } from '../../assets/single-dot.svg';
import { ReactComponent as LikeIcon } from '../../assets/like.svg';
import { ReactComponent as CommentIcon } from '../../assets/comments.svg';
import { ReactComponent as ArrowIcon } from '../../assets/arrow.svg';
import ActionDropdown from '../action-dropdown/action-dropdown.component';

import './post.styles.scss';

const DefaultnewCommentData = {
	body: "",
	post_id: ""
}

const Post = ({ post }) => {
	const [isActionDropdownOpen, setIsActionDropdownOpen] = useState(false);	
	const [ newCommentData, setNewCommentData ] = useState(DefaultnewCommentData);
	const [ commentsArray, setCommentsArray ] = useState(post.relationships.comments.data);

	const toggleActionDropdown = () => setIsActionDropdownOpen(!isActionDropdownOpen);	

	const onCommentInputChangeHandler = (event) => {
		const bodyValue = event.target.value;
		const idValue = post.id;

		setNewCommentData({ body: `${bodyValue}`, post_id: `${idValue}` });
		console.log(newCommentData);
	}


	const addCommentHandler = async () => {
		if (newCommentData == DefaultnewCommentData) {
			alert("please enter something in comment!");
		} else {
			try {
				const response = await axios.post('http://localhost:3000/api/v1/comments', newCommentData);
				alert("New comment added successfully!");
				window.location.reload();
			} catch (error) {
				console.error(error);
			}
		}
	}

	return (
		<>
			<div className='post-title-container'>
				<div className="post-title">{post.attributes.title}</div>
				<span className='post-info'>{moment(post.attributes.updated_at).fromNow()}, Public</span>
				<div className='post-threedots' onClick={toggleActionDropdown} >
					<ThreeDots />
				</div>				
			</div>
			{isActionDropdownOpen && <ActionDropdown postId={post.id} />}
			<div className='description'>{post.attributes.description}</div>
			<div className='likes-comments-count'>
				<span>221 Likes</span>
				<span><SingleDot /></span>
				<span> {commentsArray.length} Comments</span>
			</div>
			<hr className='line1' />
			<div className='add-like-comment-container'>
				<div className='add'>
					<LikeIcon />
					<span>Like</span>
				</div>
				<Link to='/comments'	state={{postId: post.id}}>
					<div className='add'>
						<CommentIcon />
						<span>Comments</span>
					</div>
				</Link>
			</div>
			<hr className='line2' />
			<div className='add-a-comment'>
				<input type='text' placeholder='  Write a comment' onChange={onCommentInputChangeHandler} />
				<div className='add-comment-button' onClick={addCommentHandler}>
					<ArrowIcon className='arrow-icon' />
				</div>
			</div>
		</>

	)
}

export default Post;