import { useState } from 'react';
import { Link } from 'react-router-dom';
import Post from '../../components/post/post.component';
import Acomment from '../a-comment/a-comment.component';
import './all-posts.styles.scss';


const AllPosts = ({ post, comment }) => {
	return (
		<>
			<div className='post-container'> 
				<Post post={post} />				
				<Acomment comment={comment} />
			</div>
		</>
	)
}

export default AllPosts;