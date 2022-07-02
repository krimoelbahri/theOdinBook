import axios from "axios";
let URL = "/api/posts/";
let user = JSON.parse(localStorage.getItem("user"));
const config = {
	headers: {
		Authorization: `Bearer ${user.token}`,
	},
};

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
	let response = await axios.post(URL, userData, config);
	return response.data;
};
const uploadImage = async function (userData) {
	let response = await axios.post(URL + "uploadImg", userData, {
		headers: {
			Authorization: `Bearer ${user.token}`,
			"Content-Type": "multipart/form-data; boundary=<calculated when request is sent>",
		},
	});
	return response.data;
};
const addComment = async function (userData, postId) {
	let response = await axios.post(URL + postId + "/comment", userData, config);
	return response.data;
};
const deleteComment = async function (commentId, postId) {
	let response = await axios.delete(URL + postId + "/comment/" + commentId, config);
	return response.data;
};

let postServices = { getPosts, getPost, addPost, uploadImage, addComment, deleteComment };
export default postServices;
