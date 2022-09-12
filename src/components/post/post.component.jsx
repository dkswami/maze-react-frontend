import { ReactComponent as ThreeDots } from '../../assets/three-dots.svg';
import { ReactComponent as SingleDot } from '../../assets/single-dot.svg';
import { ReactComponent as LikeIcon } from '../../assets/like.svg';
import { ReactComponent as CommentIcon } from '../../assets/comments.svg';
import { ReactComponent as ArrowIcon } from '../../assets/arrow.svg';

import './post.styles.scss';

const Post = ({ post }) => {
	return (
		<>
			<div className='post-container'>
				<div className='post-title-container'>
					<div className="post-title">{post.attributes.title}</div>
					<span className='post-info'>15h, Public</span>
					<ThreeDots className='post-threedots' />
				</div>
				<div className='description'>{post.attributes.description}</div>
				<div className='likes-comments-count'>
					<span>221 Likes</span>
					<span><SingleDot /></span>
					<span> 3 Comments</span>
				</div>
				<hr className='line1' />
				<div className='add-like-comment-container'>
					<div className='add'>
						<LikeIcon />
						<span>Like</span>
					</div>
					<div className='add'>
						<CommentIcon />
						<span>Comment</span>
					</div>
				</div>
				<hr className='line2' />
				<div className='add-a-comment'>
					<input type='text' placeholder='Write a comment' />
					<div className='add-comment-button'>
						<ArrowIcon className='arrow-icon' />
					</div>
				</div>
				<a href='' className='view-comments'>View All Comments!</a>
			</div>
		</>

	)
}

export default Post;