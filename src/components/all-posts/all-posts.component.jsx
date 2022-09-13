import { Link } from 'react-router-dom';
import Post from '../../components/post/post.component';
import './all-posts.styles.scss';


const AllPosts = ({ post }) => {
	return (
		<>
			<div className='post-container'>
				<Post post={post} />
				<Link to='/comments' className='view-comments'>View All Comments!</Link>
			</div>
		</>
	)
}

export default AllPosts;