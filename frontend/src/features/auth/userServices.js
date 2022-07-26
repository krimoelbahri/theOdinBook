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

const facebookSignin = async function () {
	let response = await axios.get(URL + "auth/facebook");
	console.log(response);
	if (response.data) {
		localStorage.setItem("user", JSON.stringify(response.data));
	}
	return response.data;
};

let userServices = {
	facebookSignin,
	friendRequest,
	friendRequestreply,
};
export default userServices;
