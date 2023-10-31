import express from 'express';
import { likeRes } from '../controller/controller.js';

const resRoute = express.Router();
resRoute.post("/likeRes", likeRes);


export default resRoute;
