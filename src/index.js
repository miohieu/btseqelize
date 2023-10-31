import express from "express"
import routes from "./routes/routes.js"



const app = express()
app.use(express.json())


app.listen(8001, console.log("starting on port 8008, http://localhost:8001"))

app.use("/api", routes)

