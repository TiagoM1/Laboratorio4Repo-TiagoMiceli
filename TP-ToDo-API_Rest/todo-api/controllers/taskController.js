
import Task from "../models/Task.js"

export const getAll = async (req, res) => {
  const filter = req.query.estado ? { estado: req.query.estado } : {}
  const tasks = await Task.find(filter).sort("fechaLimite")
  res.json(tasks)
}

export const getOne = async (req, res) => {
  const task = await Task.findById(req.params.id)
  task ? res.json(task) : res.status(404).send("No encontrada")
}

export const create = async (req, res) => {
  const task = new Task(req.body)
  await task.save()
  res.status(201).json(task)
}

export const update = async (req, res) => {
  const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true })
  task ? res.json(task) : res.status(404).send("No encontrada")
}

export const remove = async (req, res) => {
  const { Sprint } = await import("../models/Sprint.js")
  const used = await Sprint.findOne({ tareas: req.params.id })
  if (used) return res.status(400).send("La tarea está en un sprint")
  await Task.findByIdAndDelete(req.params.id)
  res.sendStatus(204)
}
