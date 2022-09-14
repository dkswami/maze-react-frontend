import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import Post from '../../components/post/post.component';
import './complete-post.styles.scss';
import { useState } from 'react';
import Acomment from '../../components/a-comment/a-comment.component';


const CompletePost = () => {
	const location = useLocation();
	const { postId } = location.state;

	const [ aCompletePost, setACompletePost ] = useState([]);
	const [ allcomments, setAllcomments ] = useState([]);

	const getAllPost = async () => {
		try {
			const response = await axios.get('http://localhost:3000/api/v1/posts');
			setACompletePost(response.data.data);
			setAllcomments(response.data.included);
		} catch (error) {
			console.error(error);
		}
	}
	
	useEffect(()=> {
		getAllPost();
	},[]);

	return(
		<>
			<div className='all-comments-container'>
				{aCompletePost.map((post) => {
					if (post.id === postId) {
						return (
							<Post key={post.id} post={post} />							
						);
					}									
				})}
				<h2>Comments</h2>
				{ allcomments.map((comment)=> {
					if( comment.attributes.post_id == postId) {
						return <Acomment key={comment.id} comment={comment} />
					}					
				})}
			</div>
		</>
	)
}

export default CompletePost;