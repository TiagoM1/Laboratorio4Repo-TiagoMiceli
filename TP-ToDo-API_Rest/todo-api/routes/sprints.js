
import express from "express"
import * as ctrl from "../controllers/sprintController.js"

const router = express.Router()

router.get("/", ctrl.getAll)
router.get("/:id", ctrl.getOne)
router.post("/", ctrl.create)
router.put("/:id", ctrl.update)
router.delete("/:id", ctrl.remove)
router.put("/:id/add-task/:taskId", ctrl.addTask)

export default router
