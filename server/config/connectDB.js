import mongoose from "mongoose";

const connectionDataBase = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL)
            .then(() => console.log("Connected to the database"))
            .catch((error) => console.log("Error connecting", error))
    } catch (error) {
        console.log("Connection failed", error);
    }
}

export default connectionDataBase;