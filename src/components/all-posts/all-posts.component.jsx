import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Post from '../../components/post/post.component';
import { PostsContext } from '../../contexts/posts.context';
import Acomment from '../a-comment/a-comment.component';
import './all-posts.styles.scss';


const AllPosts = ({ post, comments }) => {
	const { wholeCommentsData } = useContext(PostsContext);
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