import { useState, useEffect, useContext } from 'react';
import axios from "axios";
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

import { ReactComponent as LiveVideoIcon } from '../../assets/live video.svg';
import { ReactComponent as PhotosVideosIcon } from '../../assets/photos-videos.svg';
import { ReactComponent as FeelingIcon } from '../../assets/feeling.svg';
import './feeds.styles.scss';
import AllPosts from '../../components/all-posts/all-posts.component';
import { PostsContext } from '../../contexts/posts.context';
import { UserContext } from '../../contexts/user.context';

const DefaultpostData = {
	title: "",
	description: "",
	user_id: "",
	post_status: ""
}

const Feeds = () => {
	const { wholePostsData, wholeCommentsData } = useContext(PostsContext);
	const { currentUser } = useContext(UserContext);
	const [postData, setPostData] = useState(DefaultpostData);
	const { description, post_status } = postData;

	const onChangeHandler = (event) => {
		const { name, value } = event.target;	/* const titleValue = desValue.slice(0, 10); */

		setPostData({
			...postData,
			[name]: value,
			title: `${currentUser.first_name} ${currentUser.last_name}`,
			user_id: currentUser.id
		});

	}

	const onClickPostButton = async () => {
		if (postData == DefaultpostData) {
			alert("please enter something in post!");
		} 
		if(post_status == "") {
			alert("please select post status!");
		}
		else {
			console.log(postData)
			const access_token = localStorage.getItem('access_token')
			const config = {
				headers: {
					Authorization: `Bearer ${access_token}`,
				},
			}
			try {
				const response = await axios.post('http://localhost:3000/api/v1/posts', postData, config);
				alert("New post created successfully!");
				window.location.reload();
			} catch (error) {
				console.error(error);
			}
		}
	}

	return (
		<div className='home-container'>
			<div className='add-post-container'>
				<form>
					<input type='text' name='description' /* value={description} */ placeholder="What's happening ?   First 10 Characters will be taken as title." onChange={onChangeHandler} />
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
						<FormControl sx={{ m: 1, minWidth: 120 }} size="small">
							<InputLabel id="demo-select-small">Status</InputLabel>
							<Select labelId="demo-select-small"
								id="demo-select-small"
								name='post_status'
								value={post_status}
								label="post_status"
								onChange={onChangeHandler} >
								<MenuItem value={'public'}>public</MenuItem>
								<MenuItem value={'private'}>private</MenuItem>
							</Select>
						</FormControl>
					</div>
					<button type='submit' className='add-post-button' onClick={onClickPostButton}>Post</button>
				</form>
			</div>
			{
				wholePostsData && wholePostsData.slice(0).reverse().map((post) => {
					return <AllPosts key={post.id} post={post} comments={post.comments} />
				})
			}
			
		</div>
	)
}

export default Feeds;