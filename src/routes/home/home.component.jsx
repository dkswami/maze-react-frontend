import { useState, useEffect, useContext } from 'react';
import axios from "axios";

import { ReactComponent as LiveVideoIcon } from '../../assets/live video.svg';
import { ReactComponent as PhotosVideosIcon } from '../../assets/photos-videos.svg';
import { ReactComponent as FeelingIcon } from '../../assets/feeling.svg';
import './home.styles.scss';
import AllPosts from '../../components/all-posts/all-posts.component';
import { PostsContext } from '../../contexts/posts.context';

const DefaultpostData = {
	title: "",
	description: ""
}
var filteredData = [];


const Home = () => {
	const { wholePostsData, wholeCommentsData } = useContext(PostsContext);
	const [postData, setPostData] = useState(DefaultpostData);

	const onChangeHandler = (event) => {
		const desValue = event.target.value;
		const titleValue = desValue.slice(0, 10);

		setPostData({ title: `${titleValue}`, description: `${desValue}` });
		console.log(postData);
	}

	const onClickPostButton = async () => {
		if (postData == DefaultpostData) {
			alert("please enter something in post!");
		} else {
			try {
				const response = await axios.post('http://localhost:3000/api/v1/posts', postData);
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
				<input type='text' placeholder="  What's happening ?   First 10 Characters will be taken as title." onChange={onChangeHandler} />
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
				<button className='add-post-button' onClick={onClickPostButton}>Post</button>
			</div>
			{
				wholePostsData.slice(0).reverse().map((post) => {
					filteredData = wholeCommentsData.filter(comments => comments.attributes.post_id == post.id)
					const lastComment = filteredData[filteredData?.length - 1];
					
					return <AllPosts key={post.id} post={post} comment={ lastComment } />					
				})
			}
		</div>
	)
}

export default Home;