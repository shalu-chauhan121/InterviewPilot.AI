import express from "express"
import { createOrder, verifyPayment } from "../controller/payment.controller.js";
import { isAuth } from '../middleware.js/isAuth.js';

const paymentRouter=express.Router();

paymentRouter.post("/order",isAuth,createOrder);
paymentRouter.post("/verify",verifyPayment)

export default paymentRouter