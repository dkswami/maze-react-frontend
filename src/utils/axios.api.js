import axios from "axios";


const baseURL = "http://localhost:3000/api/v1";
const CLIENT_ID="oQWCKBuGGnd6xyAM_btjo0o49I_lS8me04REL-Z4mpc"
const CLIENT_SECRET="uZJwH353nS-B-ureeOva7x_79mTQetN25NLxscsMN2g"

const LOGIN_URL = baseURL+"/oauth/token";
const SIGNUP_URL = baseURL+"/users";
const ALL_USERS_URL = baseURL+"/users";
const LOGOUT_URL = baseURL+"/oauth/revoke";
const CURRENT_USER_URL = baseURL+"/users/me";


export const loginWithEmailAndPassword = async ({email, password}) => {
	const data = {
		grant_type: "password",
		email: email,
		password: password,
		client_id: CLIENT_ID,
		client_secret: CLIENT_SECRET,
	}
	try {
		const response = await axios.post(LOGIN_URL, data);
		localStorage.setItem("access_token", response.data.access_token);
		return response.data;		
	} catch (error) {	
		console.log(error)
		return error.response.data;
	}
}

export const SignupWithEmailAndPassword = async ({firstName, lastName, phoneNumber, email, password}) => {
	const data = {
		first_name: firstName,
		last_name: lastName,
		phone_number: phoneNumber,
		email: email,
		password: password,
		client_id: CLIENT_ID,
	}
	try {
		const response = await axios.post(SIGNUP_URL, data);
		localStorage.setItem("access_token", response.data.access_token);
		return response.data;		
	} catch (error) {	
		
		return error.response.data;
	}
}

export const getCurrentUser = async (accessToken) => {
	const config = {
		headers: {
			Authorization: `Bearer ${accessToken}`,
		},
	}
	try {
		const response = await axios.get(CURRENT_USER_URL, config);
		return response.data;
	} catch (error) {
		return error.response.data;
	}
}

export const getAllUsers = async (accessToken) => {
	const config = {
		headers: {
			Authorization: `Bearer ${accessToken}`,
		},
	}
	try {
		const response = await axios.get(ALL_USERS_URL, config);
		return response.data;
	} catch (error) {
		return error.response.data;
	}
}

export const logoutUserWithToken = async (token) => {
	const data = {
		token: token,
		client_id: CLIENT_ID,
		client_secret: CLIENT_SECRET,
	};
	try {
		const response = await axios.post(LOGOUT_URL, data);
		return response.data;	
	} catch (error) {	
		return error.response.data;
	}
}