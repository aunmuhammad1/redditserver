import router from './routes/index.js';
import mongoose from 'mongoose';
import express from 'express';
import dotenv from 'dotenv';

dotenv.config({ path: './.env' });
import cookieParser from 'cookie-parser';
import cors from 'cors';
const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(cors());
app.use(router);

const uri = mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log('db started'));

app.listen(8000, () => {
  console.log('server started on port 8000');
});
