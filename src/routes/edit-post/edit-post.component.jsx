import { useParams } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import axios from 'axios';

import { ReactComponent as LiveVideoIcon } from '../../assets/live video.svg';
import { ReactComponent as PhotosVideosIcon } from '../../assets/photos-videos.svg';
import { ReactComponent as FeelingIcon } from '../../assets/feeling.svg';
import { PostsContext } from '../../contexts/posts.context';

import './edit-post.styles.scss';

const EditPost = () => {
	const { postId } = useParams();
	var [ postData, setPostData ] = useState({});
/* 	const { postsDataMap } = useContext(PostsContext);
	console.warn("posts dataMap value before state",postsDataMap) */
	const getaSinglePost = async (postId) => {
		try {
			const response = await axios.get(`http://localhost:3000/api/v1/posts/${postId}`);
			/* console.log(response.data.data.attributes); */
			setPostData(response.data.data.attributes);
			
		} catch (error) {
			console.error(error);
		}
	}
	console.warn("this is post data",postData.title)
	

	useEffect(()=> {		
		getaSinglePost(postId);
	}, [postId]);

	return (
		<div className='edit-post-container'>
			<div className='input'>
				<span>Title</span>
				<input type='text' className='title-input'   defaultValue={postData.title}/>
			</div>
			<div className='input'>
				<span>Description</span>
				<input type='text' className='desc-input'   defaultValue={postData.description}/>
			</div>			
			<div className='addons-with-post'>
				<div className='add-post-item'>
					<LiveVideoIcon /><span> Live Video</span>
				</div>
				<div className='add-post-item'>
					<PhotosVideosIcon /> <span> Photo/Video</span>
				</div>
				<div className='add-post-item'>
					<FeelingIcon /> <span> Feeling </span>
				</div>
			</div>
			<button className='add-post-button' >Post</button>
		</div>
	)
}

export default EditPost;