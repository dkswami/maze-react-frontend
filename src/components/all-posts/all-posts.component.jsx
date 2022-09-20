import { useState } from 'react';
import { Link } from 'react-router-dom';
import Post from '../../components/post/post.component';
import Acomment from '../a-comment/a-comment.component';
import './all-posts.styles.scss';


const AllPosts = ({ post, comment }) => {
	console.log(comment)
/* 	const commentData = []
	comments.map((comment)=> {
			
			if( comment.attributes.post_id == post.id) {						
				commentData.push(comment)			
			}								
		})
	console.log(commentData)
	/* commentData[commentData.length - 1] */
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