import express from "express"
import resRoute from "./restaurantRoutes.js"

const routes = express.Router()


routes.use("/restaurant", resRoute)

export default routes
