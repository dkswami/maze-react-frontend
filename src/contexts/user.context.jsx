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
		if(isLoggedIn) {
			getUser();
		}
		else {
			Navigate('/login');
		}

	}, [isLoggedIn]);

	return (
		<UserContext.Provider value={{ currentUser, isLoggedIn, setCurrentUser, setIsLoggedIn }}>
			{children}
		</UserContext.Provider>
	);
}