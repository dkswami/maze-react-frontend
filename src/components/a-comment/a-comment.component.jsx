import { ReactComponent as CommentLike } from '../../assets/comment-like.svg';
import './a-comment.styles.scss';

const Acomment = ({ comment }) => {
	return(
		<div className='a-comment-container'>	
			<hr className='comment-line' />		
			<span className='comment-body'>
				{ comment.attributes.body}
			</span>
			<div className='comment-info'>
				<CommentLike />
				<span className='comment-like-count'>2</span>		
			</div>
			<span className='comment-time'>2h</span>
		</div>
	)
}

export default Acomment;