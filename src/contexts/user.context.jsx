import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getCurrentUser } from "../utils/axios.api";

export const UserContext = createContext({
	currentUser: null,
	setCurrentUser: () => { },
	isLoggedIn: false,
	setIsLoggedIn: () => { }
});

export const UserProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState({});
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const Navigate = useNavigate();
	const access_token = localStorage.getItem('access_token')

	useEffect(() => {
		const access_token = localStorage.getItem('access_token')
		const getUser = async () => {
			try {				
				const response = await getCurrentUser(access_token);
				if (response) {
					setCurrentUser(response);
				}
			} catch (error) {
				console.log(error)
			}
		}
		if(access_token) {
			getUser();
		}
	}, [access_token]);

	return (
		<UserContext.Provider value={{ currentUser, isLoggedIn, setCurrentUser, setIsLoggedIn }}>
			{children}
		</UserContext.Provider>
	);
}