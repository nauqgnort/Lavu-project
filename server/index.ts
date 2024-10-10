import express from "express";
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 3001;
const dbURL = 'mongodb+srv://${proset.evn.DATABASE_USERNAME}:${proset.evn.DATABASE_PASSWORD}@cluster0.swi31.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
const app = express();
app.listen(PORT, () => {
    
    console.log(`Server is starting at http://localhost:${process.env.PORT}`);
});
