import { createContext, useEffect, useState } from "react";

export const UserContext = createContext({
	currentUser: null,
	setCurrentUser: () => {},
	isLoggedIn: false,
	setIsLoggedIn: () => {}
});

export const UserProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState(null);
	const [isLoggedIn, setIsLoggedIn] = useState(false);

/* 	useEffect(() => {
		const user = localStorage.getItem("user");
		if (user) {
			setCurrentUser(JSON.parse(user));
			setIsLoggedIn(true);
		}
	}, []); */

	return (
		<UserContext.Provider value={{ currentUser, isLoggedIn, setCurrentUser, setIsLoggedIn }}>
			{children}
		</UserContext.Provider>
	);
}