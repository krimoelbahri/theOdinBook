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

let postServices = {
	addComment,
	deleteComment,
	addLike,
};
export default postServices;
