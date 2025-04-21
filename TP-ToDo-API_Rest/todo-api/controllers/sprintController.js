
import Sprint from "../models/Sprint.js"
import Task from "../models/Task.js"

export const getAll = async (req, res) => {
  const sprints = await Sprint.find().populate("tareas")
  res.json(sprints)
}

export const getOne = async (req, res) => {
  const sprint = await Sprint.findById(req.params.id).populate("tareas")
  sprint ? res.json(sprint) : res.status(404).send("No encontrado")
}

export const create = async (req, res) => {
  const sprint = new Sprint(req.body)
  await sprint.save()
  res.status(201).json(sprint)
}

export const update = async (req, res) => {
  const sprint = await Sprint.findByIdAndUpdate(req.params.id, req.body, { new: true })
  sprint ? res.json(sprint) : res.status(404).send("No encontrado")
}

export const remove = async (req, res) => {
  await Sprint.findByIdAndDelete(req.params.id)
  res.sendStatus(204)
}

export const addTask = async (req, res) => {
  const task = await Task.findById(req.params.taskId)
  if (!task) return res.status(404).send("Tarea no encontrada")
  const sprint = await Sprint.findById(req.params.id)
  if (!sprint) return res.status(404).send("Sprint no encontrado")
  sprint.tareas.push(task._id)
  await sprint.save()
  res.json(sprint)
}
