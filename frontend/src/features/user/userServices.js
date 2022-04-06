import axios from "axios";
let URL = "/api/user/";

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
const logout = () => {
	localStorage.removeItem("user");
};

let userServices = { signup, signin, logout };
export default userServices;
