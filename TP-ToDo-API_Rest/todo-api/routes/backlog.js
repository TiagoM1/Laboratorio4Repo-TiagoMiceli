
import express from "express"
import * as ctrl from "../controllers/backlogController.js"

const router = express.Router()

router.get("/", ctrl.getBacklog)
router.post("/", ctrl.createBacklog)
router.put("/add-task/:taskId", ctrl.addTaskToBacklog)

export default router
