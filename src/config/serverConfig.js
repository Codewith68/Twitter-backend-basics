import dotenv from 'dotenv';
dotenv.config();
const PORT = process.env.PORT || 3000;
export { PORT };

export const MONGO_URL = process.env.MONGO_URL; // define mongo url