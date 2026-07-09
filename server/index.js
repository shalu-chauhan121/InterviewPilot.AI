import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/connectDB.js';
import authRouter from './routes/auth.route.js';
import cookieParser from 'cookie-parser';
import cors from 'cors'
import userRouter from './routes/user.route.js';
import interviewRouter from './routes/interview.route.js';
import paymentRouter from './routes/payment.route.js';
dotenv.config();
const app=express();
app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin:"https://interviewpilot-ai-1.onrender.com",
  // origin:"http://localhost:5173",
  credentials:true
}));

let port=process.env.PORT;

app.listen(port,()=>{
  console.log("Server started");
  connectDB();
});

app.use("/api/auth",authRouter);
app.use("/api/user",userRouter);
app.use("/api/interview",interviewRouter);
app.use("/api/payment",paymentRouter);
