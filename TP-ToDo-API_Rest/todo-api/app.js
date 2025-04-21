
import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import taskRoutes from "./routes/tasks.js"
import sprintRoutes from "./routes/sprints.js"
import backlogRoutes from "./routes/backlog.js"

dotenv.config()
const app = express()

app.use(express.json())
app.use("/tasks", taskRoutes)
app.use("/sprints", sprintRoutes)
app.use("/backlog", backlogRoutes)

mongoose.connect(process.env.MONGO_URI).then(() => {
  app.listen(3000, () => console.log("Server running on port 3000"))
}).catch(err => console.error(err))
