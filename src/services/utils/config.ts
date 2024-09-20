require('dotenv').config();

const PORT = process.env.PORT || 3000;
const MONGO_URL = process.env.MONGO_URL 
const JWT_SECRET = process.env.JWT_SECRET

export default {
  PORT,
  MONGO_URL,
  JWT_SECRET
};