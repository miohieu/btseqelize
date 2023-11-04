import express from "express"
import { createOrder } from "../controller/controller.js"

const orderRoutes = express.Router()


orderRoutes.post("/create-order", createOrder)

export default orderRoutes

