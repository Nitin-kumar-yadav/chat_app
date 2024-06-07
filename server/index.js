import express, { urlencoded } from 'express';
import { configDotenv } from 'dotenv';
import connectionDataBase from './config/connectDB.js';
import userRoute from './routes/userRoute.js'
import messageRoute from './routes/messageRoute.js';
import cookieParser from 'cookie-parser';
import cors from "cors";

configDotenv();
const app = express();


const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(cookieParser());
app.use(urlencoded({ extended: true }));
const corsOption = {
    origin: 'http://localhost:3000',
    credentials: true
};
app.use(cors(corsOption));


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