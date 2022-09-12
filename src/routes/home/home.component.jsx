import { useState, useEffect } from 'react';
import axios from "axios";

import Post from "../../components/post/post.component";

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
			{
				posts.map((post) => {
					return <Post key={post.id} post={post} />
				})
			}
		</div>
	)
}

export default Home;