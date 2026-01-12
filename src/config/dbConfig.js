import mongoose from 'mongoose';
import { MONGO_URL } from './serverConfig.js';

export const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URL, {
        });
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.log('Error connecting to MongoDB:', error.message);
        process.exit();
    }
};

export const closeDB = async () => {
    try {
        await mongoose.connection.close();
        console.log('MongoDB connection closed successfully');
    } catch (error) {
        console.log('Error closing MongoDB connection:', error.message);
        process.exit();
    }
};