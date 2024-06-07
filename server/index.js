import express, { urlencoded } from 'express';
import { configDotenv } from 'dotenv';
import connectionDataBase from './config/connectDB.js';
import userRoute from './routes/userRoute.js'
import messageRoute from './routes/messageRoute.js';
import cookieParser from 'cookie-parser';
import cors from "cors";

configDotenv();
const app = express();
app.use(cors({
    origin: ['http://localhost:3000', 'https://chat-app-api-umber.vercel.app']
}));


const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(cookieParser());
app.use(urlencoded({ extended: true }));


// Routes

app.use('/api/v1/users', userRoute)
app.use('/api/v1/message', messageRoute)
app.get("/", (req, res) => {
    res.status(200).json({
        message: "Welcome to Web Chat application"
    })
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    connectionDataBase()
});