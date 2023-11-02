import express from 'express';
import { likeByRes, likeByUser, likeRes, rateByRes, rateByUser, rateRes } from '../controller/controller.js';

const resRoute = express.Router();



resRoute.post("/likeRes", likeRes);

resRoute.post("/rate/rateRes", rateRes)

resRoute.get("/likes/restaurant/:resID", likeByRes)
resRoute.get("/likes/user/:userID", likeByUser)


resRoute.get("/rate/restaurant/:res_id", rateByRes)
resRoute.get("/rate/user/:user_id", rateByUser)

export default resRoute;
