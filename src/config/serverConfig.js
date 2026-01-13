import dotenv from 'dotenv';
dotenv.config();
const PORT = process.env.PORT || 3000;
export { PORT };

export const MONGO_URL = process.env.MONGO_URL; // define mongo url

export const CLOUDINARY_API_KEY = process.env.CLOUDINARY_API_KEY; // define cloudinary api key
export const CLOUDINARY_API_SECRET = process.env.CLOUDINARY_API_SECRET; // define cloudinary api secret
export const CLOUDINARY_CLOUD_NAME = process.env.CLOUDINARY_CLOUD_NAME; // define cloudinary cloud name