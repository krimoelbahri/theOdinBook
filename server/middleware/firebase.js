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
	limits: { fileSize: 0.5 * 1024 * 1024 /* 2MB */ },
	fileFilter: (req, file, cb) => {
		if (
			file.mimetype == "image/png" ||
			file.mimetype == "image/jpg" ||
			file.mimetype == "image/webp" ||
			file.mimetype == "image/jpeg"
		) {
			cb(null, true);
		} else {
			cb(null, false);
			return cb(new Error("Only .png,.webp, .jpg and .jpeg format allowed!"));
		}
	},
});

module.exports = { uploadImage };
