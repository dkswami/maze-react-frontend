import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const PostsContext = createContext({
	postsData: [],
});

export const PostsProvider = ({ children }) => {
	const [ postsData, setPostsData ] = useState([]);

	useEffect(() => {
		const getAllPosts = async () => {
			try {
				const response = await axios.get('http://localhost:3000/api/v1/posts');
				console.log(response);
				setPostsData(response.data.data);
			} catch (error) {
				console.error(error);
			}
		}
		getAllPosts();
	},[]);
	

	const value = { postsData }
	return(
		<PostsContext.Provider value={value}>
			{ children }
		</PostsContext.Provider>
	)
}