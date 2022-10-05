import { createContext, useEffect, useState } from "react";
import { getCurrentUser } from "../utils/axios.api";

export const UserContext = createContext({
	currentUser: null,
	setCurrentUser: () => { },
	isLoggedIn: false,
	setIsLoggedIn: () => { }
});

export const UserProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState(null);
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	useEffect(() => {		
		const getUser = async () => {			
			const access_token = localStorage.getItem('access_token')
			const response = await getCurrentUser(access_token);
			console.log(response);
			if (response) {
				setCurrentUser(response);
				setIsLoggedIn(true);
			}
		}
		getUser();
	}, []);

	return (
		<UserContext.Provider value={{ currentUser, isLoggedIn, setCurrentUser, setIsLoggedIn }}>
			{children}
		</UserContext.Provider>
	);
}