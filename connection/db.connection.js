import mongoose from "mongoose";
import env from "dotenv";
env.config();
const dbConnection = mongoose.connect(process.env.HOST + process.env.DB_NAME);

export default dbConnection;