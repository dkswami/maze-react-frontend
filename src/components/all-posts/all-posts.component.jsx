import Post from '../../components/post/post.component';
import Acomment from '../a-comment/a-comment.component';
import './all-posts.styles.scss';


const AllPosts = ({ post, comments }) => {
	const lastComment = comments[comments?.length - 1];
	
	return (
		<>
			<div className='post-container'>
				<Post post={post} />
				{					
					typeof( lastComment) !== "undefined" ? (<Acomment comment={lastComment} />) : <></>
				}
					
			</div>
		</>
	)
}

export default AllPosts;