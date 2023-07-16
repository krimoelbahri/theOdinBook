import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
	mongoose.set("strictQuery", true);
	if (isConnected) {
		console.log("DB is already connected");
		return;
	}
	try {
		mongoose.connect(process.env.MONGODB_URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
		isConnected = true;
		console.log("DB is connected");
	} catch (error) {
		console.log(error);
	}
};
