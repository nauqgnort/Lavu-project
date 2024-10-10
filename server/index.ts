

import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import userRouter from './src/routers/user';
dotenv.config();

const PORT = process.env.PORT || 3001;
const dbURL = `mongodb+srv://waat3010:wITLoFyne9pNq6ck@cluster0.neetz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
const app = express();

app.use('/auth', userRouter);

app.use(express.json());


const connectDB = async () => {
	try {
		await mongoose.connect(dbURL);

		console.log(`Connect to db successfully!!!`);
	} catch (error) {
		console.log(`Can not connect to db ${error}`);
	}
};

connectDB()
	.then(() => {
		app.listen(PORT, () => {
			console.log(`Server is stating at http://localhost:${PORT}`);
		});
	})
	.catch((error) => {
		console.log(error);
	});