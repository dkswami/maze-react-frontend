import { useParams } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import axios from 'axios';

import { ReactComponent as LiveVideoIcon } from '../../assets/live video.svg';
import { ReactComponent as PhotosVideosIcon } from '../../assets/photos-videos.svg';
import { ReactComponent as FeelingIcon } from '../../assets/feeling.svg';
import { PostsContext } from '../../contexts/posts.context';

import './edit-post.styles.scss';

const DefaultpostData = {
	title: "",
	description: ""
}

const EditPost = () => {
	const { postId } = useParams();
	var [postData, setPostData] = useState({});
	console.log(postData)

	const access_token = localStorage.getItem('access_token')
	const config = {
		headers: {
			Authorization: `Bearer ${access_token}`,
		},
	}

	const getaSinglePost = async (postId) => {
		try {
			const response = await axios.get(`http://localhost:3000/api/v1/posts/${postId}`, config);
			setPostData(response);

		} catch (error) {
			console.error(error);
		}
	}

	const onChangeHandler = (event) => {
		const { name, value } = event.target;

		setPostData({ ...postData, [name]: value });
		console.log(postData);
	}

	const onClickPostButton = async () => {
		if (window.confirm("Do you want to save this post?")) {
			try {
				const response = await axios.patch(`http://localhost:3000/api/v1/posts/${postId}`, postData, config);
				alert("Post saved successfully!");
				window.location.href = '/users/feeds';
			} catch (error) {
				console.error(error);
			}
		}
	}	/* console.warn("this is post data",postData.title)	 */

	useEffect(() => {
		getaSinglePost(postId);
	}, [postId]);

	return (
		<div className='edit-post-container'>
			<div className='input'>
				<span>Title</span>
				<input type='text' className='title-input' name="title" defaultValue={postData.title} onChange={onChangeHandler} />
			</div>
			<div className='input'>
				<span>Description</span>
				<input type='text' className='desc-input' name="description" defaultValue={postData.description} onChange={onChangeHandler} />
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
			<button className='add-post-button' onClick={onClickPostButton} >Post</button>
		</div>
	)
}

export default EditPost;