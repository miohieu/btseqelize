import express from "express"
import resRoute from "./restaurantRoutes.js"
import orderRoutes from "./orderRoutes.js"

const routes = express.Router()


routes.use("/restaurant", resRoute)
routes.use("/order", orderRoutes)

export default routes
