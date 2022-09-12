import { useState, useEffect } from 'react';
import axios from "axios";

import { ReactComponent as LiveVideoIcon } from '../../assets/live video.svg';
import { ReactComponent as PhotosVideosIcon } from '../../assets/photos-videos.svg';
import { ReactComponent as FeelingIcon } from '../../assets/feeling.svg';
import Post from "../../components/post/post.component";
import  './home.styles.scss';

const Home = () => {
	const [posts, setPosts] = useState([]);

	const getAllPosts = async () => {
		try {
			const response = await axios.get('http://localhost:3000/api/v1/posts');
			console.log(response);
			setPosts(response.data.data);
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
				<input type='text' placeholder="What's happening ?" />
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
				<button className='add-post-button'>Post</button>
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