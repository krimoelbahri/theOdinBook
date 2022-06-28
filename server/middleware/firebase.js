const Multer = require("multer");
const FirebaseStorage = require("multer-firebase-storage");

const multer = Multer({
	storage: FirebaseStorage({
		bucketName: process.env.STORAGEBUCKET,
		credentials: {
			clientEmail: process.env.CLIENTEMAIL,
			privateKey: process.env.PRIVATEKEY.replace(/\\n/g, "\n"),
			projectId: process.env.PROJECTID,
		},
		directoryPath: "post",
		public: true,
	}),
});

module.exports = { multer };
