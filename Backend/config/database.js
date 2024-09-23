import mongoose from "mongoose";

const connectWithDatabase = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URL);
        console.log("Connected with the database successfully");
    } catch (error) {
        console.log("Error while connecting with the database:", error.message);
    }
};

export default connectWithDatabase;
