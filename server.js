import 'express-async-errors';
import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
const app = express();
import morgan from 'morgan';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import cloudinary from 'cloudinary';
import helmet from 'helmet';
import mongoSanitize from 'express-mongo-sanitize';

// routers
import jobRouter from './routes/jobRouter.js';
import authRouter from './routes/authRouter.js';
import userRouter from './routes/userRouter.js';

// public
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import path from 'path';

// middleware
import errorHandlerMiddleware from './middleware/errorHandlerMiddleware.js';
import { authenticateUser } from './middleware/authMiddleware.js';

const __dirname = dirname(fileURLToPath(import.meta.url));

// Cloudinary configuration
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET,
});

// Morgan logging - only in development
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

// Security and parsing middleware
app.use(cookieParser());
app.use(express.json());
app.use(helmet());
app.use(mongoSanitize());

// API Routes
app.get('/api/v1/test', (req, res) => {
    res.json({ msg: 'test route' });
});

app.use('/api/v1/jobs', authenticateUser, jobRouter);
app.use('/api/v1/users', authenticateUser, userRouter);
app.use('/api/v1/auth', authRouter);

// Serve static files in production
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.resolve(__dirname, './client/dist')));
    
    // Serve React app for any non-API routes
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, './client/dist', 'index.html'));
    });
}

// 404 handler for API routes
app.use('/api/*', (req, res) => {
    res.status(404).json({ msg: 'API route not found' });
});

// Error handler
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5100;

// Connect to MongoDB and start server
try {
    await mongoose.connect(process.env.MONGO_URL);
    app.listen(port, () => {
        console.log(`Server running on PORT ${port}...`);
        console.log(`Environment: ${process.env.NODE_ENV}`);
    });
} catch (error) {
    console.log('MongoDB connection error:', error);
    process.exit(1);
}