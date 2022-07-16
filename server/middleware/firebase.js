const Multer = require("multer");
const FirebaseStorage = require("multer-firebase-storage");

const uploadImage = Multer({
	storage: FirebaseStorage({
		bucketName: process.env.STORAGEBUCKET,
		credentials: {
			clientEmail: process.env.CLIENTEMAIL,
			privateKey: process.env.PRIVATEKEY.replace(/\\n/g, "\n"),
			projectId: process.env.PROJECTID,
		},
		directoryPath: "images",
		unique: true,
		public: true,
	}),
});

module.exports = { uploadImage };
