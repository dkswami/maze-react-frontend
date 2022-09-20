import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const PostsContext = createContext({
	wholePostsData: [],
	wholeCommentsData: []
});

export const PostsProvider = ({ children }) => {

	const [ wholePostsData, setWholePostsData ] = useState([]);
	const [ wholeCommentsData, setWholeCommentsData ] = useState([]);

	const getAllPost = async () => {
		try {
			const response = await axios.get('http://localhost:3000/api/v1/posts');
			setWholePostsData(response.data.data);
			setWholeCommentsData(response.data.included);
		} catch (error) {
			console.error(error);
		}
	}
	
	useEffect(()=> {
		getAllPost();
	},[]);

	const value = { wholePostsData, wholeCommentsData }
	return(
		<PostsContext.Provider value={value}>
			{ children }
		</PostsContext.Provider>
	)
}