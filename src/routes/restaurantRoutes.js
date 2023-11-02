import express from 'express';
import { likeByRes, likeByUser, likeRes } from '../controller/controller.js';

const resRoute = express.Router();



resRoute.post("/likeRes", likeRes);

//lay danh sach like theo nha hang
resRoute.get("/likes/:resID", likeByRes)
resRoute.get("/likes/user/:userID", likeByUser)

export default resRoute;
