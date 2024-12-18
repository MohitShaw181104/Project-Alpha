import mongoose from "mongoose";
import {DB_NAME} from "../constants.js";

const connectDB = async () => {
    try {
        const connectInstance= await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
        console.log(`\n MongoDb Connected successfully!!! ${connectInstance.connection.host} `);
    } catch (error) {
        console.error("Error connecting to MongoDB", error);
        process.exit(1);
    }
}

export default connectDB;