import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Post from '../../components/post/post.component';
import { PostsContext } from '../../contexts/posts.context';
import Acomment from '../a-comment/a-comment.component';
import './all-posts.styles.scss';


const AllPosts = ({ post, comment }) => {
	const { wholeCommentsData } = useContext(PostsContext);
	
	return (
		<>
			<div className='post-container'>
				<Post post={post} />
				{
					typeof( comment) !== "undefined" ? (<Acomment comment={comment} />) : <></>
				}				
			</div>
		</>
	)
}

export default AllPosts;