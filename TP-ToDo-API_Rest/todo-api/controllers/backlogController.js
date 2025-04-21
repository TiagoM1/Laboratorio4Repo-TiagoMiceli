
import Backlog from "../models/Backlog.js"
import Task from "../models/Task.js"

export const getBacklog = async (req, res) => {
  const backlog = await Backlog.findOne().populate("tareas")
  res.json(backlog)
}

export const createBacklog = async (req, res) => {
  const exists = await Backlog.findOne()
  if (exists) return res.status(400).send("Ya existe un backlog")
  const backlog = new Backlog({ tareas: [] })
  await backlog.save()
  res.status(201).json(backlog)
}

export const addTaskToBacklog = async (req, res) => {
  const task = await Task.findById(req.params.taskId)
  if (!task) return res.status(404).send("Tarea no encontrada")
  const backlog = await Backlog.findOne()
  backlog.tareas.push(task._id)
  await backlog.save()
  res.json(backlog)
}
