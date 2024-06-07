import express, { urlencoded } from 'express';
import { configDotenv } from 'dotenv';
import connectionDataBase from './config/connectDB.js';
import cors from "cors";
import userRoute from './routes/userRoute.js'
import messageRoute from './routes/messageRoute.js';
import cookieParser from 'cookie-parser';

configDotenv();
const app = express();

const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(cookieParser());
app.use(urlencoded({ extended: true }));

app.use(cors(
    {
        origin: "http://localhost:3000",
        credentials: true,
        allowedHeaders: ["Content-Type", "Authorization"],
        exposedHeaders: ["Content-Type", "Authorization"],
        methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
        optionsSuccessStatus: 200
    }
));

// Routes

app.use('/api/v1/users', userRoute)
app.use('/api/v1/message', messageRoute)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    connectionDataBase()
});