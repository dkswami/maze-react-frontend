import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const PostsContext = createContext({
	postsDataMap: [],
});

export const PostsProvider = ({ children }) => {
	const [ postsDataMap, setPostsDataMap ] = useState([]);

	useEffect(() => {
		const getAllPosts = async () => {
			try {
				const response = await axios.get('http://localhost:3000/api/v1/posts');
				/* console.log(response.data.data); */
				setPostsDataMap(response.data.data);
				/* console.log(postsDataMap[1]) */
			} catch (error) {
				console.error(error);
			}
		}
		/* const getaSinglePost = async (postId) => {
			try {
				const response = await axios.get(`http://localhost:3000/api/v1/posts/${postId}`);
				console.log(response.data.data);
				setPostsDataMap(response.data.data);
				console.log(postsDataMap)
			} catch (error) {
				console.error(error);
			}
		}
		getaSinglePost(postId); */
		getAllPosts();
	},[]);
	

	const value = { postsDataMap }
	return(
		<PostsContext.Provider value={value}>
			{ children }
		</PostsContext.Provider>
	)
}