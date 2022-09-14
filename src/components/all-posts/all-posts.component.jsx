import { Link } from 'react-router-dom';
import Post from '../../components/post/post.component';
import './all-posts.styles.scss';


const AllPosts = ({ post }) => {
	return (
		<>
			<div className='post-container'> 
				<Post post={post} />
				{/* <Link to='comments/post.id' className='view-comments'>View All comments!</Link> */}
				<Link to='/comments'	state={{postId: post.id}}
				className='view-comments'>View All Comments!</Link>
			</div>
		</>
	)
}

export default AllPosts;