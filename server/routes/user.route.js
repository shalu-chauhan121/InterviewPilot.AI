import express from 'express'
import { getUser } from '../controller/user.controller.js';
import { isAuth } from '../middleware.js/isAuth.js';
const userRouter=express();

userRouter.get("/current-user",isAuth,getUser);

export default userRouter
