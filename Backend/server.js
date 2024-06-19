import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import path from 'path';
import cors from 'cors';
import corsOptions from './utils/corsOptions.js';
import logger from './utils/logger.js';
import connectDB from './config/db.js';
import AdminRoutes from './routes/AdminRoutes.js';
import StudentRoutes from './routes/StudentRoutes.js';
import BookRoutes from './routes/BookRoutes.js'
import DashboardRoutes from './routes/DashboardRoutes.js'

// Constents

const app = express();
const __dirname = path.resolve();
const morganFormat = ':method :url :status :response-time ms';

// Middlewares

app.use(express.json());
app.use(morgan(morganFormat, {
    stream: {
        write: (message) => {
            const logObject = {
                method: message.split(' ')[0],
                url: message.split(' ')[1],
                status: message.split(' ')[2],
                responseTime: message.split(' ')[3],

            };
            logger.info(JSON.stringify(logObject));
        }
    }
}));
app.use(cookieParser());
app.use(cors(corsOptions))

// Dotenv Configuration

dotenv.config();

// Database Configuration

connectDB();

// Routes

app.use('/admin', AdminRoutes)
app.use('/student', StudentRoutes)
app.use('/book', BookRoutes)
app.use('/dashboard', DashboardRoutes)
app.all('*', (req, resp) => {
    resp.status(404)
    if (req.accepts('html')) {
        resp.sendFile(path.join(__dirname, 'views', '404.html'))
    } else if (req.accepts('json')) {
        resp.json({ message: '404 Not Found' })
    } else {
        resp.type('txt').send('404 Not Found')
    }
})

// PORT

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server Running on port:${PORT}`)
})