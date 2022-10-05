import { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { UserContext } from './user.context';

export const PostsContext = createContext({
	wholePostsData: [],
	wholeCommentsData: []
});

export const PostsProvider = ({ children }) => {

	const [wholePostsData, setWholePostsData] = useState([]);
	const [wholeCommentsData, setWholeCommentsData] = useState([]);
	const { isLoggedIn } = useContext(UserContext);



	useEffect(() => {
		const getAllPost = async () => {
			const access_token = localStorage.getItem('access_token')
			const config = {
				headers: {
					Authorization: `Bearer ${access_token}`,
				},
			}
			try {
				const response = await axios.get('http://localhost:3000/api/v1/posts', config);
				console.log(response)
				setWholePostsData(response.data);
				setWholeCommentsData(response.data.included);
			} catch (error) {
				console.error(error);
			}
		}

		getAllPost();
	}, []);

	const value = { wholePostsData, wholeCommentsData }
	return (
		<PostsContext.Provider value={value}>
			{children}
		</PostsContext.Provider>
	)
}