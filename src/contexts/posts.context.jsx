import { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { UserContext } from './user.context';

export const PostsContext = createContext({
	wholePostsData: [],
	wholeCommentsData: []
});

export const PostsProvider = ({ children }) => {

	const [wholePostsData, setWholePostsData] = useState([]);

	useEffect(() => {
		const access_token = localStorage.getItem('access_token')
		const getAllPost = async () => {			
			const config = {
				headers: {
					Authorization: `Bearer ${access_token}`,
				},
			}
			try {
				const response = await axios.get('http://localhost:3000/api/v1/posts', config);
				setWholePostsData(response.data);				
			} catch (error) {
				console.error(error);
			}
		}
		if(access_token) {
			getAllPost();
		}
	}, []);

	const value = { wholePostsData}
	return (
		<PostsContext.Provider value={value}>
			{children}
		</PostsContext.Provider>
	)
}