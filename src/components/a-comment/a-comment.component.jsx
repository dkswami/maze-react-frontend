import { useState } from 'react';
import moment from 'moment';

import { ReactComponent as CommentLike } from '../../assets/comment-like.svg';
import { ReactComponent as ThreeDots } from '../../assets/three-dots.svg';
import ActionDropdownComment from '../action-dropdown-comment/action-dropdown-comment.component';

import './a-comment.styles.scss';


const Acomment = ({ comment }) => {
	const [isActionDropdownOpen, setIsActionDropdownOpen] = useState(false);
	const toggleActionDropdown = () => setIsActionDropdownOpen(!isActionDropdownOpen);

	return (
		<div className='a-comment-container'>
			<hr className='comment-line' />
			<div className='comment-body-container'>
				<span className='comment-user'>
					{comment.commented_by.first_name} {comment.commented_by.last_name}
				</span>
				<div className='comment-threedots' onClick={toggleActionDropdown} >
					<ThreeDots />
				</div>
				{isActionDropdownOpen && <ActionDropdownComment comment={comment} />}
			</div>
			<span className='comment-body'>
				{comment.body}
			</span>
			<div className='comment-info'>
				<CommentLike />
				<span className='comment-like-count'>2</span>
			</div>
			<span className='comment-time'>{moment(comment.updated_at).fromNow()}</span>
		</div>
	)
}

export default Acomment;