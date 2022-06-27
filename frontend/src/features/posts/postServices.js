import axios from "axios";
let URL = "/api/posts/";
let user = JSON.parse(localStorage.getItem("user"));
const config = {
	headers: { Authorization: `Bearer ${user.token}` },
};

const getPosts = async function () {
	let response = await axios.get(URL);
	return response.data;
};
const addPost = async function (userData) {
	let response = await axios.post(URL, userData, config);
	return response.data;
};
const uploadImage = async function (userData) {
	let response = await axios.post(URL + "uploadImg", userData, {
		headers: {
			"Content-Type": "multipart/form-data",
		},
	});
	return response.data;
};

let postServices = { getPosts, addPost, uploadImage };
export default postServices;
