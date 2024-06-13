import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import connectDB from './config/db.js';
import AdminRoutes from './routes/AdminRoutes.js';
import StudentRoutes from './routes/StudentRoutes.js';
import BookRoutes from './routes/BookRoutes.js'
import DashboardRoutes from './routes/DashboardRoutes.js'

const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(cookieParser());
app.use(cors(
    { origin: ["http://localhost:5173"], 
      credentials:true,
    }
))

dotenv.config();

connectDB();

app.use('/admin', AdminRoutes)
app.use('/student', StudentRoutes)
app.use('/book', BookRoutes)
app.use('/dashboard', DashboardRoutes)

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server Running on port:${PORT}`)
})