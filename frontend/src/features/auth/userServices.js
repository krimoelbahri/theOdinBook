import axios from "axios";
let URL = "/api/user/";
function getConfig() {
	let user = JSON.parse(localStorage.getItem("user"));
	const config = {
		headers: {
			Authorization: `Bearer ${user?.token}`,
		},
	};
	return config;
}

const getUser = async function (id) {
	let response = await axios.get(URL + id);
	return response.data;
};
const getUsers = async function () {
	let response = await axios.get(URL + "getUsers");
	return response.data;
};
const updateUser = async function (data) {
	let id = data.author;
	let response = await axios.put(URL + id, data, getConfig());
	return response.data;
};
const friendRequest = async function ({ author, friend, action }) {
	let response = await axios.put(URL + "friend-request", { author, friend, action }, getConfig());
	return response.data;
};
const friendRequestreply = async function ({ author, friend, action }) {
	let response = await axios.put(
		URL + "friend-request-reply",
		{ author, friend, action },
		getConfig(),
	);
	return response.data;
};

const signup = async function (userData) {
	let response = await axios.post(URL + "signup", userData);
	if (response.data) {
		localStorage.setItem("user", JSON.stringify(response.data));
	}
	return response.data;
};
const signin = async function (userData) {
	let response = await axios.post(URL + "auth/local", userData);
	if (response.data) {
		localStorage.setItem("user", JSON.stringify(response.data));
	}
	return response.data;
};
const facebookSignin = async function () {
	let response = await axios.get(URL + "auth/facebook");
	console.log(response);
	if (response.data) {
		localStorage.setItem("user", JSON.stringify(response.data));
	}
	return response.data;
};
const logout = async () => {
	let response = await axios.get(URL + "auth/logout");
	if (response.data) {
		localStorage.removeItem("user");
	}
	return response.data;
};

let userServices = {
	signup,
	signin,
	facebookSignin,
	logout,
	getUser,
	updateUser,
	getUsers,
	friendRequest,
	friendRequestreply,
};
export default userServices;
