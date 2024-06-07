import express, { urlencoded } from 'express';
import { configDotenv } from 'dotenv';
import connectionDataBase from './config/connectDB.js';
import cors from "cors";
import userRoute from './routes/userRoute.js'
import messageRoute from './routes/messageRoute.js';
import cookieParser from 'cookie-parser';

configDotenv();
const app = express();
app.use(cors());

const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(cookieParser());
app.use(urlencoded({ extended: true }));


// Routes

app.use('/api/v1/users', userRoute)
app.use('/api/v1/message', messageRoute)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    connectionDataBase()
});