import { useLocation } from 'react-router-dom';
import Post from '../../components/post/post.component';
import './complete-post.styles.scss';
import Acomment from '../../components/a-comment/a-comment.component';
import { useContext } from 'react';
import { PostsContext } from '../../contexts/posts.context';


const CompletePost = () => {
	const location = useLocation();
	const { postId } = location.state;

	const { wholePostsData } = useContext(PostsContext);

	return (
		<>
			<div className='all-comments-container'>
				{wholePostsData.map((post) => {
					if (post.id === postId) {
						return (
							<>
								<Post key={post.id} post={post} />
								<h2>Comments</h2>
								{post.comments.map((comment) => {
									return <Acomment key={comment.id} comment={comment} />
								})}
							</>
						);
					}
				})}

				{/* { wholePostsData.map(()=> {
					if( comment.attributes.post_id == postId) {
						return <Acomment key={comment.id} comment={comment} />
					}					
				})} */}
			</div>
		</>
	)
}

export default CompletePost;