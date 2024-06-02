import express from 'express';
import { configDotenv } from 'dotenv';
import connectMongoDB from './config/connectDB.js';
import authRoutes from './routes/auth.routes.js'
import messageRoute from './routes/message.routes.js'
import userRoutes from './routes/user.routes.js'
import cookieParser from 'cookie-parser';

const app = express();

configDotenv();
const PORT = process.env.PORT || 8000;
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes)
app.use("/api/message", messageRoute)
app.use("/api/users", userRoutes);

app.listen(PORT, () => {
    connectMongoDB()
    console.log(`Server is running on port ${PORT}`);
})