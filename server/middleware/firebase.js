const { initializeApp } = require("firebase/app");
const { getStorage, uploadBytes, ref, getDownloadURL } = require("firebase/storage");

const firebaseConfig = {
	apiKey: process.env.APIKEY,
	authDomain: process.env.AUTHDOMAIN,
	storageBucket: process.env.STORAGEBUCKET,
};
const firebaseApp = initializeApp(firebaseConfig);
const storage = getStorage(firebaseApp);
function uploadImages(reference, file) {
	return uploadBytes(ref(storage, reference), file);
}
function DownloadImages(reference) {
	return getDownloadURL(ref(storage, reference));
}
module.exports = { uploadImages, DownloadImages };
