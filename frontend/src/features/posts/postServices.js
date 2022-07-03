import axios from "axios";
let URL = "/api/posts/";

function getConfig() {
	let user = JSON.parse(localStorage.getItem("user"));
	const config = {
		headers: {
			Authorization: `Bearer ${user?.token}`,
		},
	};
	return config;
}

const getPosts = async function (id) {
	let response;
	if (id) response = await axios.get(URL + `user/${id}`);
	if (!id) response = await axios.get(URL);
	return response.data;
};
const getPost = async function (id) {
	let response = await axios.get(URL + id);
	return response.data;
};
const addPost = async function (userData) {
	let response = await axios.post(URL, userData, getConfig());
	return response.data;
};
const uploadImage = async function (userData) {
	let response = await axios.post(URL + "uploadImg", userData, {
		headers: {
			Authorization: getConfig().headers.Authorization,
			"Content-Type": "multipart/form-data; boundary=<calculated when request is sent>",
		},
	});
	return response.data;
};
const addComment = async function (userData, postId) {
	let response = await axios.post(URL + postId + "/comment", userData, getConfig());
	return response.data;
};
const deleteComment = async function (commentId, postId) {
	let response = await axios.delete(URL + postId + "/comment/" + commentId, getConfig());
	return response.data;
};
const addLike = async function (userId, postId) {
	let response = await axios.post(URL + postId + "/like", { author: userId }, getConfig());
	return response.data;
};

let postServices = { getPosts, getPost, addPost, uploadImage, addComment, deleteComment, addLike };
export default postServices;
