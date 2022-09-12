import { useState, useEffect } from 'react';
import axios from "axios";

import { ReactComponent as LiveVideoIcon } from '../../assets/live video.svg';
import { ReactComponent as PhotosVideosIcon } from '../../assets/photos-videos.svg';
import { ReactComponent as FeelingIcon } from '../../assets/feeling.svg';
import Post from "../../components/post/post.component";
import  './home.styles.scss';

const DefaultpostData = {
	title: "",
	description: ""
}

const Home = () => {
	const [posts, setPosts] = useState([]);
	const [postData, setPostData] = useState(DefaultpostData);

	const { title, description } = postData;
	
	const getAllPosts = async () => {
		try {
			const response = await axios.get('http://localhost:3000/api/v1/posts');
			console.log(response);
			setPosts(response.data.data);
		} catch (error) {
			console.error(error);
		}
	}

	const onChangeHandler = (event) => {
		const desValue = event.target.value;
		const titleValue = desValue.slice(0,10);

		setPostData({title:`${titleValue}`, description:`${desValue}`});
		console.log(postData);
	}

	const onClickPost = async () => {
		try {
			const response = await axios.post('http://localhost:3000/api/v1/posts',postData);
			console.log(response);
		} catch (error) {
			console.error(error);
		}
	}

	useEffect(() => {
		getAllPosts();
	}, []);

	return (
		<div className='home-container'>
			<div className='add-post-container'>
				<input type='text' placeholder="What's happening ?   First 10 Characters will be taken as title."  onChange={onChangeHandler} />{console.log(description)}
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
				<button className='add-post-button' onClick={onClickPost }>Post</button>
			</div>

			{
				posts.map((post) => {
					return <Post key={post.id} post={post} />
				})
			}
		</div>
	)
}

export default Home;