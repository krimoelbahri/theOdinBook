import axios from "axios";
let URL = "/api/user/";

const signup = async function (userData) {
	let response = await axios.post(URL + "signup", userData);
	console.log(response.data);
};

let userServices = { signup };
export default userServices;
