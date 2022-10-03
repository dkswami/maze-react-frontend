import { createContext, useEffect, useState } from "react";
import { getCurrentUser } from "../utils/axios.api";

export const UserContext = createContext({
	currentUser: null,
	setCurrentUser: () => {},
	isLoggedIn: false,
	setIsLoggedIn: () => {}
});

export const UserProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState(null);
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	return (
		<UserContext.Provider value={{ currentUser, isLoggedIn, setCurrentUser, setIsLoggedIn }}>
			{children}
		</UserContext.Provider>
	);
}